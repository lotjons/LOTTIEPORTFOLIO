# Lotties portfolio

Det här är min portfolio och mitt första större projekt i React. Jag ville att
sidan skulle kännas lugn och personlig, alltså en blandning av det jag kommer ifrån
(kommunikation och UX) och det jag lär mig nu (frontendutveckling).

**Live:** https://lottie-portfolio-theta.vercel.app/

**Figma (skisser för mobil och desktop):** [LÄNK]

**Lighthouse-resultat** [docs/lighthouse.pdf](docs/lighthouse.pdf)

## Byggd med

- React + TypeScript (via Vite)
- Tailwind CSS
- Motion för animationer
- Biome för att hålla koden snygg och hitta fel
- Git, GitHub och Vercel

## Det här har jag byggt

- **Ett filter för projekten** där man kan välja flera taggar samtidigt. Ett
  projekt visas bara om det matchar alla valda taggar. Det här var det
  svåraste att få till!
- **"Show more"** så att man ser tre projekt i taget.
- **Ett kontaktformulär** som kollar varje fält och visar vad som saknas direkt
  bredvid fältet. Formuläret skickar inget på riktigt än – det står också på
  sidan, så att ingen tror att meddelandet har kommit fram.
- **Animationer** när projektlistan ändras. De stängs av om man har valt
  "reducera rörelse" på sin dator.
- **Tillgänglighet** har varit viktigt för mig: hela sidan går att använda med
  tangentbord, det finns en "Skip to content"-länk och färgerna har tillräcklig
  kontrast. Lighthouse gav 100 i Accessibility, Best Practices och SEO, och 98
  i Performance.
- Sidan fungerar från 360 px bred mobil upp till stor skärm.

## Köra projektet lokalt

```bash
git clone https://github.com/lotjons/LOTTIEPORTFOLIO.git
cd LOTTIEPORTFOLIO
npm install
npm run dev
```

Andra kommandon:

- `npm run build` – bygger sidan som den blir på Vercel
- `npm run check` – kollar koden med Biome
- `npm run format` – formaterar koden

## Ändringar från Figma-skissen

- **Lugnare färger.** Jag gick ner till sju färger med en röd accent
  (vallmoröd, min favoritblomma) för att sidan inte skulle kännas rörig.
- **Nya typsnitt.** Rubriker och logga i Melodrama, brödtext i Nunito. Jag
  ville ha något med mer personlighet än mina första val.
- **Projektkorten fick mer innehåll.** I skissen hade korten bara bild och
  titel, men uppgiften kräver beskrivning, taggar och länkar.
- **Röda i-prickar** i stället för punkter i stora rubriken, och rubriken
  "andas" långsamt. Det finns också en knapp för att stoppa rörelsen.
- **"See my work"-länk**-knappen fick krympa, den stora tog för
  mycket uppmärksamhet.
- **Bara "Clear filters"** i filtret, i stället för både "All" och "Clear",
  eftersom de gjorde samma sak.
- **Pixel Pup**, pixelanimationen som går när man håller
  musen över kortet eller tabbar dit.

## Reflektion

[Skrivs här – 200–400 ord]

## Nästa steg

- Koppla kontaktformuläret till en riktig e-posttjänst
- En knapp för att byta mellan svenska och engelska på sidan
- Byta ut exempelprojeket Fieldnotes mot eget projekt.
- Egna projektsidor för varje projekt (finns designade i min designutforskning)