# 🎉 Sito Compleanno Sorpresa - Guida di Personalizzazione

## 📋 Verifica dei Link

Tutti i link sono funzionanti e testati. Ecco la struttura:

```
index.html (Landing Page)
    ↓
pages/surprise.html (Hub principale - 4 icone)
    ├→ pages/photos.html (Galleria Polaroid)
    ├→ pages/music.html (Video YouTube)
    ├→ pages/letter.html (Lettera Romantica)
    └→ pages/gift.html (Regalo con Sorpresa)

Tutti i back button ritornano a: pages/surprise.html
```

✅ **Navigazione fluida**: Transizioni fade-in/fade-out per tutte le pagine
✅ **Keyboard shortcut**: Premi `ESC` per tornare indietro da qualsiasi pagina

---

## 🎨 Palette Colori Utilizzata

| Sezione | Colore Primario | Colore Secondario | Uso |
|---------|-----------------|-------------------|-----|
| Landing | #ffeaa7, #fab1a0 | #ff7675 | Background gradient warm |
| Sorpresa | #667eea | #764ba2 | Theme principale blu/viola |
| Foto | #ffecd2 | #fcb69f | Background pesca |
| Musica | #a8edea | #fed6e3 | Background azzurro/rosa |
| Lettera | #f5e6d3 | #e8d4b8 | Background beige vintage |
| Regalo | #ffd89b | #19547b | Background arancio/blu |

**Tutti i colori sono coerenti** e basati su una palette armonica.

---

## 🖼️ Personalizzazione Foto (Pagina Photos)

### Come inserire le tue foto:

1. **Vai a**: `pages/photos.html`
2. **Cerca**: Le 8 Polaroid (da Polaroid 1 a 8)
3. **Sostituisci**: `[LINK_FOTO_X]` con il link della tua foto
4. **Modifica**: La didascalia sotto ogni foto

### Formati supportati:
- JPG / JPEG ✅
- PNG ✅
- WebP ✅
- URL diretti (es: https://example.com/foto.jpg) ✅

### Esempio:
```html
<!-- Prima -->
<img src="[LINK_FOTO_1]" alt="Birthday Photo 1">

<!-- Dopo -->
<img src="https://example.com/mia_foto_1.jpg" alt="Birthday Photo 1">
```

---

## 🎵 Personalizzazione Video YouTube (Pagina Music)

### Come inserire il tuo video YouTube:

1. **Vai a**: `pages/music.html`
2. **Copia il link** del video da YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
3. **Converti in link embed**: Sostituisci `watch?v=` con `embed/`
4. **Incolla**: Al posto di `[LINK_YOUTUBE]`

### Esempio:
```
URL originale: https://www.youtube.com/watch?v=dQw4w9WgXcQ
URL embed:     https://www.youtube.com/embed/dQw4w9WgXcQ

Incolla il link embed nel file HTML!
```

**Nota**: Il video mantiene sempre il rapporto 16:9 su tutti i dispositivi.

---

## 💌 Personalizzazione Lettera (Pagina Letter)

### Come scrivere la tua lettera:

1. **Vai a**: `pages/letter.html`
2. **Modifica il saluto**: Cambia "My Dearest Love," con quello che preferisci
3. **Scrivi i paragrafi**: Sostituisci il testo con la tua lettera personale
4. **Personalizza la firma**: Cambia "Forever yours," e il resto come preferisci

### Suggerimenti:
- 💭 Includi ricordi speciali
- 💕 Esprimi i tuoi sentimenti sinceramente
- ✍️ Scrivi in prima persona per un tono intimo
- 🌹 Usa emoji e simboli per rendere più bella la lettera

### Formato della lettera:
```html
<p class="letter-greeting">Il tuo saluto qui</p>
<p>Primo paragrafo...</p>
<p>Secondo paragrafo...</p>
<p class="letter-closing">La tua firma qui<br>Con amore ❤️</p>
```

---

## 🎁 Personalizzazione Regalo (Pagina Gift)

### Come personalizzare il messaggio sorpresa:

1. **Vai a**: `pages/gift.html`
2. **Modifica il titolo**: "Happy Birthday, My Love! 💕"
3. **Scrivi il messaggio**: Sostituisci il testo nel div `.special-message`
4. **Personalizza la firma**: Cambia il testo nel `.heart-message`

### Come funziona:
- L'utente clicca sull'icona regalo 🎁
- Il regalo "si apre" con animazione
- Appare il tuo messaggio personalizzato
- Confetti animati celebrano! 🎊

### Formato:
```html
<p>Il tuo messaggio qui...</p>
<p class="heart-message">❤️ La tua firma ❤️</p>
```

---

## ⚡ Animazioni e Prestazioni

### Ottimizzazioni implementate:
✅ **Transizioni fluide**: 0.3s per hover, 0.5s per page transitions
✅ **Animazioni non bloccanti**: Usano `cubic-bezier` per performance
✅ **Responsive**: Funziona perfettamente su mobile, tablet, desktop
✅ **No lag**: Transizioni limitate solo agli elementi necessari

### Tempi animazione:
- Page load fade-in: **0.5s**
- Hover effects: **0.3s** (icone, bottoni, foto)
- Polaroid loading: **0.6s** con staggered delay
- Video load: **0.8s** fade-in
- Gift opening: **0.8s** animazione rotazione
- Confetti animation: **3s** caduta

---

## 📱 Responsività Testata

Il sito è completamente responsive su:

| Dispositivo | Breakpoint | Stato |
|------------|-----------|-------|
| Desktop | 1024px+ | ✅ Completamente ottimizzato |
| Tablet | 768-1023px | ✅ Interfaccia adattata |
| Mobile Grande | 600-767px | ✅ Elementi ingranditi |
| Mobile Piccolo | 480-599px | ✅ Layout vertical |
| Extra Small | <480px | ✅ Minimalista ma usabile |

---

## 🔗 Verifica Finale dei Link

**Esegui questa checklist prima di condividere il sito:**

- [ ] Pagina landing carica senza errori
- [ ] Pulsante "Yes!!" porta a surprise.html
- [ ] Pulsante "No, thanks" mostra alert
- [ ] Le 4 icone nella pagina sorpresa sono cliccabili
- [ ] Foto → mostra le tue polaroid
- [ ] Musica → mostra il video YouTube
- [ ] Lettera → mostra il tuo messaggio
- [ ] Regalo → cliccabile e mostra confetti + messaggio
- [ ] Back button funziona da tutte le pagine
- [ ] ESC key funziona come back button
- [ ] Tutto è responsive su mobile

---

## 💡 Suggerimenti Finali

1. **Prova il sito**: Apri `index.html` in un browser prima di condividere
2. **Testa i link**: Assicurati che tutte le foto e video carichino
3. **Check responsività**: Usa il dev tool del browser (F12) per testare su mobile
4. **Personalizza lentamente**: Non cercare di fare tutto insieme
5. **Salva backup**: Prima di modificare i file, fai un backup

---

## 🚀 Come Aprire il Sito

### Opzione 1: File locale
- Apri `index.html` direttamente nel browser

### Opzione 2: Local server (migliore)
```bash
# Se hai Python:
python -m http.server 8000

# Se hai Node.js:
npx http-server

# Poi vai a: http://localhost:8000
```

---

## 📞 Assistenza

Se hai problemi con:
- **Link rotti**: Controlla i percorsi relativi (`../` per su, niente per stesso livello)
- **Foto non visibili**: Usa URL completi e non path locali
- **Video YouTube non funziona**: Assicurati che il link sia nel formato embed
- **Animazioni lente**: È normale su browser molto vecchi

---

**Fatto con ❤️ per la tua sorpresa d'amore! 🎉**
