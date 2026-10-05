---
title: Ournet, rescris de la zero
date: '2026-10-05T12:00:00.000Z'
tags:
  - Ournet
  - harness
  - AI
cid: p-28-1
---

![Ournet.ro - prima pagină](/img/projects/ournet/portal-01.jpg)

[Ournet](/projects/ournet) are 16 ani. Codul vechi avea vreo 8: Node 8, React 16, AWS SDK v2, ~60 de pachete npm proprii, vreo 15 procese pe 2–3 servere EC2 și cinci sisteme de date diferite: DynamoDB, MongoDB, Elasticsearch, S3, Redis. Orice schimbare mică însemna 3–4 publicări npm. Nu mai voiam să-l întrețin așa.

Așa că l-am rescris de la zero. Fără cod copiat — proiectele vechi au rămas doar specificația.

## Stack

- **un singur pachet Node 24**, TypeScript rulat direct de Node, fără build;
- **două procese**: `web` (paginile) și `worker` (preluarea știrilor, meteo, horoscop, imagini);
- **Postgres 18** — singura bază de date;
- imaginile în **Cloudflare R2**;
- **Caddy** în față, **Docker Compose** pentru tot;
- HTML randat pe server, fără framework pe client.

Entitizer, care extrage subiectele din fiecare știre, nu mai e serviciu separat — e o bibliotecă în același proces. [Entipic](/projects/entipic) la fel: a rămas pe `cdn.entipic.com`, cu aceleași URL-uri, iar imaginile le caută în Wikipedia, Wikidata, Commons, Openverse și, la nevoie, prin SerpAPI.

![Click.md - ultimele știri](/img/projects/ournet/news-01.jpg)

## Server

Un singur server AWS Lightsail în Frankfurt: **2 vCPU și 4 GB RAM**, cu Cloudflare (gratuit) în față. Pe el stau toate: Postgres, web, worker și Caddy. Memoria e împărțită strict: web 350 MB, worker 250 MB, Postgres 1,2 GB. Costul estimat: în jur de 26 $ pe lună, cu tot cu imagini.

## Ce am tăiat

Am păstrat doar ce merită costul:

- portal complet (știri, meteo, horoscop) în **Moldova, România, Italia, Ungaria și Bulgaria**;
- doar meteo în **Albania, Turcia și Vietnam**;
- închise: Spania, India, Cehia, cursul valutar, notificările, newsletter-ul, aplicațiile mobile, widget-urile.

![Ournet.ro - vremea în România](/img/projects/ournet/meteo-01.jpg)

## Cum

L-am construit cu un [harness agentic](/blog/harness-laziar), ca cel de la Laziar: eu decid, agenții scriu cod, un reviewer automat citește fiecare diff. În șase zile: 28 de planuri, 194 de taskuri, peste 250 de commit-uri. Designul e nou, la fel.

![Ournet.ro - horoscopul zilei](/img/projects/ournet/horoscop-01.jpg)

Ournet e din nou un proiect pe care îl pot ține singur.
