# Shake It-Daily

En journalapp för daglig reflektion. Skriva inlägg baserat på en prompt som du får när du skakar telefonen. Allt sparas lokalt och du kan bestämma om något är privat eller inte.

## Komma igång

Krav:
- Node.js och npm
- Expo Go på mobilen
- Terminal

Installation:

```bash
git clone https://github.com/adamwidar-92/Shake-It-Daily.git
cd Shake-It-Daily
npm install
npx expo start
```

Scanna QR-koden med Expo Go. Done.

## React Native-komponenter

- View - containers
- Text - labels och innehål
- Pressable - knapparna
- TextInput - inputfält för titel och text
- FlatList - listan av inlägg på hemskärmen
- ScrollView - för scrollning på formuläret
- Switch - privat/offentlig toggle
- Image - visar bilden du laddar upp

---

## Expo SDK-moduler

- expo-sensors - Accelerometer för skak-detektion
- expo-haptics - vibrationer när man skakar eller sparar
- expo-image-picker - välj bilder från galleriet
- expo-file-system - lagra inlägg lokalt
- expo-router - navigering mellan skärmarna

---

## Navigering

Tre skärmar:

- **Hem** - lista över inlägg, klick tar dig till detaljsida
- **Nytt inlägg** - formulär för att skriva, skaka för ny prompt
- **Detaljsida** - visar ett inlägg, tar id från URL

Filstrukturen i `app/`:
- `_layout.tsx` - navigatorn
- `index.tsx` - hem
- `ny.tsx` - formuläret
- `inlagg/[id].tsx` - detaljsida (med parameter)

---

## Hur det fungerar

Inlägg sparas som JSON-fil lokalt. Det finns en `lagring.ts` som läser och skriver till filen.

Skak-detektionen är en hook `useSkakning` som lyssnar på accelerometer och triggar en ny random prompt när du skakar. Den har lite debouncing så den inte triggas typ 10 gånger per skakning.

Navigering med Expo Router och hela appen är skriven i TypeScript.

---

## Krav-checklista

✅ **Godkänt:**
- Minst 4 RN-komponenter (jag använder 8)
- Minst 4 Expo SDK-moduler (jag använder 5)
- Expo Router för navigering
- En skärm med parameter (detaljskärmen tar id)
- Git commits spridda över tiden
- README.md
- TypeScript: 0 fel
- expo-doctor: all checks passed

