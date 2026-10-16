# Lotties portfolio

Det här är min portfolio och mitt första större projekt i React. Jag ville att
sidans formspråk skulle kännas lugn och personlig och på sikt ska den även spegla min bakgrund inom kommunikation samt det jag lär mig nu (frontendutveckling).

**Live:** https://lottie-portfolio-theta.vercel.app/

**Figma:** [Portfolio-skisser (mobil + desktop)]
Prototyp 1: (https://claude.ai/artifact/7miLFKdhKTq62mtQwKnReT#page-dcb81aee8d83)
Prototyp 2: (https://www.figma.com/design/QIapI5dfmfBbQ3gh6y1Zi4/Portfolio-v1.?node-id=8-16086&t=v9BW2TTNRqCAufES-1)
Prototyp 3: (https://www.figma.com/design/IGVyI0mS2rWDCEPodGceTH/Prototyp-v.2?node-id=0-1)

**Lighthouse-resultat:** [docs/lighthouse.pdf](docs/lighthouse.pdf)
## Byggd med

- React + TypeScript (via Vite)
- Tailwind CSS
- Motion för animationer
- Biome för att hålla koden snygg och hitta fel
- Git, GitHub och Vercel


## Designutforskning och AI

Jag genererade [prototyp 1](https://claude.ai/artifact/7miLFKdhKTq62mtQwKnReT#page-dcb81aee8d83) och utforskade där varianter (states,filter, fomulärfel). Med [inspiration från en blandning av olika designs](docs/design-exploration/inspiration-prototyp.png) som jag gillar tog jag tillsammans med Claude fram [prototyp 2](https://www.figma.com/design/QIapI5dfmfBbQ3gh6y1Zi4/Portfolio-v1.?node-id=8-16086&t=v9BW2TTNRqCAufES-1). Den gillade jag skarpt och valde att tweaka. Jag promptade Claude att ändra detaljer tills jag fick fram en enklare version. Jag hade gärna behållit mycket av designen från prototyp 2, men tyckte den lite för deatljrik. Därför skalade jag ner den så att det också skulle bli rimligt att hinna med allt. Då landade jag i [prototyp 3](https://www.figma.com/design/IGVyI0mS2rWDCEPodGceTH/Prototyp-v.2?node-id=0-1)
  Jag har skrivit koden själv i VS Code, med Claude som lärare: jag bad Claude förklara varför och hur saker fungerar och hänger ihop, och ge mig tydlig feedback.

## Det här har jag byggt

- **Ett filter för projekten** där man kan välja flera taggar samtidigt. Ett
  projekt visas bara om det matchar alla valda taggar. Det här var det
  svåraste att få till!
- **"Show more"** så att man ser tre projekt i taget.
- **Ett kontaktformulär** som kollar varje fält och visar vad som saknas direkt
  bredvid fältet. Formuläret skickar inget på riktigt än, men mitt mål är att lösa det för framtida användning av sidan. Jag har gjort så dett står på
  sidan, så att ingen tror att meddelandet har kommit fram, istället hänvisas man till att skriva mail. 
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
- **"See my work"**-knappen fick krympa, den stora tog för mycket uppmärksamhet.
- **Bara "Clear filters"** i filtret, i stället för både "All" och "Clear",
  eftersom de gjorde samma sak.
- **Pixel Pup**, istället för att den loopar konstant har jag ändrat så att den bara går när man håller
  musen över kortet eller tabbar dit.
- **Field Notes** är ett påhittat utfyllnadsprojekt som kommer ersättas med något från min utbldning inom frontend, typ ett spel.


## Reflektion

[Skrivs här – 200–400 ord]

## Nästa steg

- Koppla kontaktformuläret till en riktig e-posttjänst
- En knapp för att byta mellan svenska och engelska på sidan
- Byta ut exempelprojeket Fieldnotes mot eget projekt.
- Egna projektsidor för varje projekt (finns designade i min designutforskning)