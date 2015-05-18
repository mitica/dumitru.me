---
title: "AWS - o experiență fantastică"
layout: "post"
tags: ["AWS", "Cloud"]
isPost: true
cid: 'p-15-1'
---

Recunosc că am fost un programator .NET convins. Mă simțeam foarte confortabil în lumea Windows: server, C#, etc.

De fapt, după absolvirea universității, practic, am programat doar în C# (...). Între timp, a crescut numărul serverelor pe care țineam proiectele mele: Top20.md(vechi), Place.md(mort), Ournet([ournet.ro](http://meteo.ournet.ro), click.md, [zborg.ru](http://pogoda.zborg.ru), etc. - vii), și alte zeci de încercări.

## Amazon Web Services

AWS este superb! Cine nu știe ce și cum - nu voi lămuri - e prea târziu; celora care nu se pot hotărî să folosească *la greu* serviciile Amazon, le sugerez să lase orice îndoială și să caute soluții anume în Cloud.

## Node.js

Ca limbaj de programare server side am ales Nodejs. Despre acesta pot spune doar cuvinde bune: simplu, modular, clar, opensource.

Acum când revin la proiectele scrise în C#, de multe ori, mă îngrozesc la câtă complexitate fără de sens găsesc.

## Exemplu

De mai mult timp foloseam, ocazional, serviciile AWS, în special S3. Relativ recent, am hotărât să transfer toate proiectele pe AWS.

Am început cu proiectul Meteo de pe Ournet - mi s-a părut mie mai ușor de rescris și transportat.

Proiectul are ~ **80 mii afișări de pagini pe zi**. Bază de date cu câteva sute de mii de localități și informația despre starea vremii pentru localitățile căutate.

Proiectul folosește pe AWS următoarele resurse:

- 1 server cu 1CPU și 1GB RAM, Linux;
- DynamoDB;
  + un tabel cu localități;
  + alt table cu starea vremii;
- CloudFront

Deci, un proiect cu 80.000 afișări de pagini per zi funcționează excelent pe o instanță de 1CPU și 1GB RAM.

După părerea mea - este foarte bine.

#### Costuri

Costul pentru toate resursele folosite pe AWS este sub **$40** per lună.

## Concluzii

Trecând peste toate avantajele unui Cloud, cel mai fine mi s-a părut faptul că la fiecare linie de cod ții cont de resursele pe care le folosești.

În lunele următoare voi transfera și celelalte proiecte în Cloud-ul Amazon.

Acum cred că dacă un proiect nu se poate auto-întreține pe AWS, atunci nu merită creat.
