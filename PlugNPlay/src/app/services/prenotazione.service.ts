import { Injectable } from '@angular/core';

interface Prenotazione {
  id: number;
  giocoId: number;
  data: Date;
  statoPrenotazione: 'In attesa' | 'Confermata';
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
  private readonly PRENOTAZIONI_KEY = 'prenotazioni';
  private readonly ACQUISTI_KEY = 'acquisti';

  constructor() {
    // Inizializza localStorage se vuoto
    if (!localStorage.getItem(this.PRENOTAZIONI_KEY)) {
      localStorage.setItem(this.PRENOTAZIONI_KEY, JSON.stringify([]));
    }
    if (!localStorage.getItem(this.ACQUISTI_KEY)) {
      localStorage.setItem(this.ACQUISTI_KEY, JSON.stringify([]));
    }
  }

  effettuaAcquisto(giocoId: number, importo: number): void {
    const acquisti: Acquisto[] = JSON.parse(localStorage.getItem(this.ACQUISTI_KEY) || '[]');
    const nuovoAcquisto: Acquisto = {
      id: Date.now(),
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
