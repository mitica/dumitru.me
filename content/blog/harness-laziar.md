---
title: Harnessul care a rămas
date: '2026-09-11T12:00:00.000Z'
tags:
  - harness
  - Laziar
  - AI
cid: p-27-1
---

![Harness statistici](/img/blog/harness-wide.png)

Am plecat pe 16 august. Pe 19 a intrat în sistemul pe care l-am construit un om care de atunci a scris în el mai mult decât oricine. Nu ne-am suprapus niciodată, nici măcar pe un commit.

Două luni am construit la Laziar, o platformă media din Chișinău, un harness agentic — un repo în care agenții AI urmează un flux: brief → epic → plan → task. Harnessul controlează alte zece repo-uri; el ține doar gândirea. Fiecare task își numește repo-ul țintă, comanda exactă cu care se verifică și dovada că a fost verificat. Un reviewer automat citește diff-ul înainte de orice commit. Deciziile mari devin ADR-uri imutabile. Iar convențiile nu descriu idealul, ci starea măsurată, cu dată: „la 19 august, 35 din 63 de entități sunt încă în locul greșit". Un agent care citește minciuni politicoase produce muncă politicoasă și greșită.

Prin el au trecut: motorul de recomandări, rescris de la zero pe embeddings și devenit implicit în producție; un sistem propriu de push notifications pe iOS, Android și web; upgrade la toate repozitoriile + o mulțime de teste (+ developeri nemulțumiți). De asemenea: chestionarul zilei și reacțiile vizitatorilor.

> 1079 de commit-uri de pe 18 iunie. 570 sunt ale mele. Ultimul, pe 16 august seara — am plecat.

De atunci: 431 de commit-uri, făcute de trei oameni. 264 de taskuri noi, 28 de planuri, 9 epic-uri și 6 decizii de arhitectură pe care nu le-am luat eu. Ritmul, pe săptămâni: 156 în ultima mea săptămână acolo, apoi 124, 132, 88, iar acum 86 în cinci zile. Ultimul commit e de azi-dimineață.

### Ce am învățat

1. Demo-urile și codul deschis de pe net sunt folositoare, dar soluția nu poate fi decât personalizată. Fiecare proiect are stack-ul, bugetul și echipa lui.
2. Nu e ușor să convingi un developer să folosească un harness agentic zi de zi. Să convingi întreaga echipă e aproape imposibil.
3. De aceea soluția e bine să fie cât se poate de simplă. Să se simtă ca o unealtă, nu ca un nou job.
4. Omul nu dispare — rolul lui devine și mai important. Fiecare programator devine specialistul care înțelege proiectul la care lucrează și decide.
5. Un harness care supraviețuiește autorului nu ține de prompturi bune. Ține de a scrie regulile astfel încât să funcționeze pentru cineva care nu te poate întreba.
6. Orice harness are nevoie de îmbunătățiri periodice. Am testat mult și am greșit mult; cred că și ăsta mai are de îmbunătățit — sper ca cei de la Laziar s-o facă fără mine.

Și partea mai puțin flatantă, fiindcă face parte din aceeași poveste: am plecat fiindcă pierdeam prea mult timp implementând taskuri. Construisem o mașină care planifică, verifică și livrează — și o foloseam ca să închid tichete interne. Sistemul scala. Eu, nu.
