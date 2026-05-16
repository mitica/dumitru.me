import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const sections = ["blog", "projects", "tags"];

function createAlias(section, slug) {
  const source = path.join(outDir, section, slug, "index.html");
  const alias = path.join(outDir, section, `${slug}.html`);

  if (!fs.existsSync(source)) {
    return;
  }

  fs.copyFileSync(source, alias);
}

for (const section of sections) {
  const sectionDir = path.join(outDir, section);

  if (!fs.existsSync(sectionDir)) {
    continue;
  }

  const entries = fs.readdirSync(sectionDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    createAlias(section, entry.name);
  }
}
