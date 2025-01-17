import { Injectable } from '@angular/core';

// service che gestisce la logica di prenotazioni e acquisti
// usa localStorage per i dati

interface Prenotazione {
  id: number;
  giocoId: number;
  data: Date;
  statoPrenotazione: 'In attesa' | 'Confermata' | 'Completata';
}

interface Acquisto {
  id: number;
  giocoId: number;
  data: Date;
  importo: number;
}

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {
  // chiavi per salvare i dati nel localStorage
  private readonly PRENOTAZIONI_KEY = 'prenotazioni';
  private readonly ACQUISTI_KEY = 'acquisti';

  constructor() {
    // inizializza localStorage se vuoto
    if (!localStorage.getItem(this.PRENOTAZIONI_KEY)) {
      localStorage.setItem(this.PRENOTAZIONI_KEY, JSON.stringify([]));
    }
    if (!localStorage.getItem(this.ACQUISTI_KEY)) {
      localStorage.setItem(this.ACQUISTI_KEY, JSON.stringify([]));
    }
  }

  // salva nuovo acquisto nel localStorage
  effettuaAcquisto(giocoId: number, importo: number): void {
    const acquisti: Acquisto[] = JSON.parse(localStorage.getItem(this.ACQUISTI_KEY) || '[]');
    const nuovoAcquisto: Acquisto = {
      id: Date.now(), // momento d'acquisto come id
      giocoId,
      data: new Date(),
      importo
    };
    acquisti.push(nuovoAcquisto);
    localStorage.setItem(this.ACQUISTI_KEY, JSON.stringify(acquisti));
  }

  effettuaPrenotazione(giocoId: number): void {
    const prenotazioni: Prenotazione[] = JSON.parse(localStorage.getItem(this.PRENOTAZIONI_KEY) || '[]');
    const nuovaPrenotazione: Prenotazione = {
      id: Date.now(),
      giocoId,
      data: new Date(),
      statoPrenotazione: 'In attesa'
    };
    prenotazioni.push(nuovaPrenotazione);
    localStorage.setItem(this.PRENOTAZIONI_KEY, JSON.stringify(prenotazioni));
  }

  getPrenotazioni(): Prenotazione[] {
    return JSON.parse(localStorage.getItem(this.PRENOTAZIONI_KEY) || '[]');
  }

  getAcquisti(): Acquisto[] {
    return JSON.parse(localStorage.getItem(this.ACQUISTI_KEY) || '[]');
  }
}
