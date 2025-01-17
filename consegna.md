# Progetto Angular: Sistema Gestione Videogiochi

## Obiettivo
Sviluppare un'applicazione web in Angular per la gestione di un catalogo di videogiochi, con funzionalità di visualizzazione disponibilità e sistema di prenotazione.

La prenotazione deve avvenire solo se la disponibilità del videogioco è falsa, altrimenti prevedi l'acquisto.

**Assunzione:** L'utente è già loggato come utente base.

## Requisiti Funzionali

### Gestione Videogiochi
1. **Visualizzazione:**
   * Titolo
   * Descrizione
   * Genere
   * Data di rilascio
   * Prezzo
   * Stato di disponibilità (disponibile/non disponibile)
   * Immagine di copertina
2. **Funzionalità per giochi non disponibili:**
   * Possibilità di effettuare una prenotazione
   * Visualizzazione dello stato della prenotazione

### Sistema di Prenotazione
1. **Form di prenotazione:**
   * Nome e cognome
   * Email
   * Telefono
   * Indirizzo di spedizione
2. **Validazione:** Verifica dei dati inseriti dall'utente.
3. **Conferma:** Messaggio di conferma della prenotazione.
4. **Tracking:** Visualizzazione dello stato della prenotazione.

## Consigli
* **Persistenza:** Utilizzare `localStorage` per salvare i dati dell'applicazione.