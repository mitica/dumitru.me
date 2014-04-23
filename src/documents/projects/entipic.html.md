---
layout: "project"
isProject: true
title: "Entipic"
summary: "O imagine pentru fiecare topic"
projUniqueName: 'entipic'
projName: 'Entipic'
projIsAlive: true
projReleaseDate: '2014-04-10'
projVersion: '0.2'
projLinks: ["http://entipic.com"]
cid: 'proj-entipic'
---

Numele Entipic vine de la 'Entity picture'. Ideea proiectului este de a oferi pentru fiecare topic/entitate cunoscut/ă o imagine reprezentativă.

Proiectul seamănă mult cu [Gravatar](http://gravatar.com): dacă Gravatar oferă o imagine pentru fiecare adresă de email _cunoscută_, atunci Entipic oferă o imagine pentru fiecare topic _popular_.

Ideea proiectului s-a născut din necesitatea de a asocia fiecărui topic(personalitate, localitate, instituție, brănd, etc.) din știrile oferite de portalul [Ournet](/projects/ournet.html) câte o imagine.

## Problema

Dacă avem un proiect/site care utilizează entități ca: **personalități**, **locuri**, **brănd**-uri, **instituții**/**companii**; des apare problema de a însoți entitatea cu o imagine reprezentativă: de exemplu, dorim ca lângă **Barack Obama** să avem și imaginea acestuia.

Pentru a soluționa această problemă este nevoie de o muncă foarte mare și destul de neplăcută. Aici Entipic vine ca soluție ideală.

## Funcționalitate

Proiectul primește cereri de imagini la o anumită adresă (//[cdn.host]/[context]/[size]_[topic].jpg), dacă sistemul are deja o imagine pentru acest topic va returna imaginea respectivă, în caz contrat va returna o imagine temporară. Între timp, sistemul va căuta imaginea care poate fi asociată topic-ului cerut. După ce va găsi imaginea, va returna mereu acea imagine.