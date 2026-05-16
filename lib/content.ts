import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: true });

type BaseEntry = {
  title: string;
  slug: string;
  contentHtml: string;
};

export type Post = BaseEntry & {
  date: string;
  dateValue: Date;
  tags: string[];
  cid?: string;
  excerpt: string;
};

export type Project = BaseEntry & {
  summary: string;
  isAlive: boolean;
  releaseDate?: string;
  releaseYear?: number;
  links: string[];
  cid?: string;
};

export type Tag = {
  name: string;
  slug: string;
  count: number;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

let postsCache: Post[] | null = null;
let projectsCache: Project[] | null = null;

function listMarkdownFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(dir, name));
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

function toDate(value: unknown): Date {
  if (!value) {
    return new Date(0);
  }

  if (value instanceof Date) {
    return value;
  }

  const parsed = new Date(String(value));
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

function toDateString(value: unknown): string {
  return toDate(value).toISOString();
}

function toBoolean(value: unknown): boolean {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }

  return Boolean(value);
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((item) => String(item).trim()).filter(Boolean);
}

export function normalizeTagSlug(tag: string): string {
  let slug = tag.trim();
  slug = slug.replace(/ /g, "-").replace(/\./g, "-");
  slug = slug.replace(/c#/gi, "c-sharp").toLowerCase();
  if (slug === "-net") {
    return "dot-net";
  }
  return slug;
}

function rewriteLegacyLinks(content: string): string {
  return content
    .replace(/(https?:\/\/(?:www\.)?dumitru\.me)?\/(projects|blog|tags)\/([a-z0-9-]+)\.html/gi, "/$2/$3")
    .replace(/(href=\"\/tags\/[a-z0-9-]+)\.html(\")/gi, "$1$2");
}

function markdownToHtml(markdown: string): string {
  const normalized = rewriteLegacyLinks(markdown);
  const rendered = marked.parse(normalized);
  return typeof rendered === "string" ? rendered : "";
}

function textExcerpt(markdown: string): string {
  const normalized = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[\*_#>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (normalized.length <= 180) {
    return normalized;
  }

  return `${normalized.slice(0, 177)}...`;
}

export function getAllPosts(): Post[] {
  if (postsCache) {
    return postsCache;
  }

  const files = listMarkdownFiles(BLOG_DIR);

  const posts = files.map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);
    const slug = slugFromFilename(path.basename(file));
    const dateValue = toDate(data.date);

    return {
      title: String(data.title ?? slug),
      slug,
      cid: data.cid ? String(data.cid) : undefined,
      date: toDateString(data.date),
      dateValue,
      tags: toStringArray(data.tags),
      contentHtml: markdownToHtml(content),
      excerpt: textExcerpt(content)
    } satisfies Post;
  });

  postsCache = posts.sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime());
  return postsCache;
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

export function getAllProjects(): Project[] {
  if (projectsCache) {
    return projectsCache;
  }

  const files = listMarkdownFiles(PROJECTS_DIR);

  const projects = files.map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);
    const slug = slugFromFilename(path.basename(file));
    const releaseDateRaw = data.releaseDate ?? data.projReleaseDate;
    const releaseDate = releaseDateRaw ? String(releaseDateRaw) : undefined;
    const releaseYear = releaseDate ? toDate(releaseDate).getFullYear() : undefined;

    return {
      title: String(data.title ?? slug),
      slug,
      summary: String(data.summary ?? ""),
      isAlive: toBoolean(data.isAlive ?? data.projIsAlive),
      releaseDate,
      releaseYear: Number.isFinite(releaseYear) ? releaseYear : undefined,
      links: toStringArray(data.links ?? data.projLinks),
      cid: data.cid ? String(data.cid) : undefined,
      contentHtml: markdownToHtml(content)
    } satisfies Project;
  });

  projectsCache = projects.sort((a, b) => {
    if (a.isAlive !== b.isAlive) {
      return a.isAlive ? -1 : 1;
    }

    const left = a.releaseDate ? toDate(a.releaseDate).getTime() : 0;
    const right = b.releaseDate ? toDate(b.releaseDate).getTime() : 0;
    return right - left;
  });

  return projectsCache;
}

export function getProjectBySlug(slug: string): Project | null {
  return getAllProjects().find((project) => project.slug === slug) ?? null;
}

export function getTags(): Tag[] {
  const tags = new Map<string, Tag>();

  for (const post of getAllPosts()) {
    for (const tagName of post.tags) {
      const slug = normalizeTagSlug(tagName);
      const existing = tags.get(slug);

      if (existing) {
        existing.count += 1;
      } else {
        tags.set(slug, {
          name: tagName,
          slug,
          count: 1
        });
      }
    }
  }

  return Array.from(tags.values()).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getPostsByTagSlug(tagSlug: string): Post[] {
  return getAllPosts().filter((post) => post.tags.some((tag) => normalizeTagSlug(tag) === tagSlug));
}

export function getAdjacentPosts(slug: string): { next: Post | null; prev: Post | null } {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) {
    return { next: null, prev: null };
  }

  return {
    next: index > 0 ? posts[index - 1] : null,
    prev: index < posts.length - 1 ? posts[index + 1] : null
  };
}

export function splitProjectsByStatus(projects: Project[]): { active: Project[]; inactive: Project[] } {
  return {
    active: projects.filter((project) => project.isAlive),
    inactive: projects.filter((project) => !project.isAlive)
  };
}
