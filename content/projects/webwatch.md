---
title: WebWatch.md
summary: Webul Moldovei, măsurat în timp real
isAlive: true
releaseDate: '2026-06-01'
links:
  - 'https://webwatch.md/'
cid: proj-webwatch
---

WebWatch este un sistem automat de monitorizare a site-urilor din Republica Moldova. Verifică în mod continuu site-urile care se adresează publicului din Moldova — indiferent de extensia domeniului — și păstrează un istoric al stării lor.

Pentru fiecare site, sistemul urmărește dacă este online, cât de repede răspunde, dacă folosește HTTPS, dacă se afișează corect pe telefon și ce tehnologii folosește. Din aceste măsurători rezultă un singur Scor, însoțit de istoricul complet.

Mottoul proiectului spune totul: **„Webul Moldovei, măsurat în timp real”**.

## De unde provine

WebWatch este forma nouă a primului meu proiect, [Top20.md](/projects/top20). Top20.md a fost un clasament construit, în timp, pe informații care îmbătrâneau și nu mai puteau fi verificate ușor.

Am reconstruit proiectul în jurul unui principiu simplu: *un clasament merită încredere doar dacă se bazează pe lucruri măsurabile azi și verificabile de oricine.* Această schimbare de gândire a dus la un nume nou și la o orientare nouă — date curente și verificabile, în locul unor clasamente statice.

## Problema

Pe internetul din Moldova lipsește o sursă independentă, transparentă și actualizată despre starea reală a site-urilor: care funcționează, care sunt sigure, care se afișează corect pe telefon și care au rămas în urmă.

Clasamentele vechi se bazau pe date pe care nimeni nu le mai putea verifica. WebWatch pornește de la ideea opusă: fiecare cifră trebuie să vină dintr-o măsurătoare reproductibilă, nu dintr-o estimare sau dintr-o părere.

## Cum funcționează

Măsurătorile se fac automat, în trei ritmuri:

- **zilnic** — o vizită pe prima pagină a fiecărui site, pentru disponibilitate, viteză, HTTPS și schimbări de conținut;
- **lunar** — o verificare completă a paginii principale: HTTPS, compatibilitate mobilă, tehnologii folosite și viteza de încărcare;
- **trimestrial** — reîmprospătarea datelor de registru și de rețea (domeniu, găzduire, configurația de securitate a email-ului).

Scorul este pe o scară de la 0 la 100 și este calculat exclusiv din semnale măsurabile: disponibilitatea în fereastra de observare, performanța (PageSpeed), HTTPS, prietenia cu dispozitivele mobile, prospețimea conținutului și interesul din catalog. Un semnal încă nemăsurat nu trage scorul în jos, iar scorurile sunt arhivate lunar și nu se recalculează — așa graficele istorice rămân stabile chiar dacă metodologia evoluează.

Un site este admis în catalog dacă este făcut pentru publicul din Moldova. Verificarea automată cântărește mai multe semnale: marcajul regional ro-MD, telefon sau adresă din Moldova, limba română, prețuri în lei, domeniu .md, găzduire locală și legături către alte site-uri moldovenești.

## Ce ține de om și ce ține de mașină

Principiul proiectului este clar: **cifrele vin din măsurători, opiniile au semnătură.** Nicio statistică nu este generată de un model AI — toate metricile provin din măsurători automate.

Textele editoriale sunt o altă poveste: sunt redactate cu ajutorul AI pe baza datelor măsurate, apoi editate și semnate de un om. Toate înscrierile trec printr-o verificare umană înainte de a intra în catalog. Întreaga metodologie este documentată public și transparentă.

## Capturi de ecran

<div class="project-screenshots">
  <figure>
    <img src="/img/projects/webwatch/home-01.jpg" alt="WebWatch.md - prima pagină cu mottoul „Webul Moldovei, măsurat în timp real”" />
    <figcaption>Prima pagină: starea webului moldovenesc și căutarea după domeniu.</figcaption>
  </figure>
  <figure>
    <img src="/img/projects/webwatch/dashboard-01.jpg" alt="WebWatch.md - schimbările din ultimele 24 de ore și mișcarea scorului" />
    <figcaption>Ce s-a schimbat în ultimele 24 de ore și mișcarea lunară a scorurilor.</figcaption>
  </figure>
  <figure>
    <img src="/img/projects/webwatch/observatory-01.jpg" alt="WebWatch.md - Observatorul cu sănătatea generală a webului .md" />
    <figcaption>Observatorul: sănătatea generală a webului .md — HTTPS, mobil, PageSpeed și scor median.</figcaption>
  </figure>
</div>

## Starea actuală

Proiectul este activ. În prezent monitorizează peste 1.000 de site-uri și oferă, pe lângă scor, un director căutabil al site-urilor din Moldova, jurnale de schimbări din ultimele 24 de ore, mișcările lunare ale scorurilor și diverse perspective de securitate (de exemplu, adoptarea DMARC).

Pentru mine, WebWatch este răspunsul la „criza existențială” a Top20.md: în loc să caut o nouă formă pentru un clasament vechi, am pornit de la zero, dar de la o idee mult mai onestă — să măsor, nu să presupun.
