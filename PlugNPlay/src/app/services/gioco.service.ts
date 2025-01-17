import { Injectable } from '@angular/core';
import { Gioco } from '../models/gioco.model';

@Injectable({
  providedIn: 'root'
})
export class GiocoService {
  private giochi: Gioco[] = [
    {
      id: 1,
      titolo: "Baldur's Gate 3",
      descrizione: 'Basato sul mondo di D&D, immersivo ed immenso, vincitore GOTY 2023',
      genere: 'RPG',
      dataRilascio: new Date('2023-08-03'),
      prezzo: 59.99,
      disponibile: true, 
      imgCopertina: 'assets/bg3.jpg'
    },
    {
      id: 2,
      titolo: 'Elden Ring',
      descrizione: 'Gioco Souls-like open-world fantasy d\'azione',
      genere: 'ARPG',
      dataRilascio: new Date('2022-02-25'),
      prezzo: 59.99,
      disponibile: false,
      imgCopertina: 'assets/elden-ring.jpg'
    },
    {
      id: 3,
      titolo: 'Celeste',
      descrizione: 'Platformer di precisione con una profonda storia personale',
      genere: 'Platformer',
      dataRilascio: new Date('2018-01-25'),
      prezzo: 19.99,
      disponibile: true,
      imgCopertina: 'assets/celeste.jpg'
    },
    {
      id: 4,
      titolo: 'LISA: The Painful',
      descrizione: 'RPG post-apocalittico psicologico',
      genere: 'RPG',
      dataRilascio: new Date('2014-12-15'),
      prezzo: 9.99,
      disponibile: false,
      imgCopertina: 'assets/lisa.jpg'
    },
    {
      id: 5,
      titolo: 'Outer Wilds',
      descrizione: 'Avventura esplorativa spaziale dai forti temi emotivi',
      genere: 'Avventura',
      dataRilascio: new Date('2019-05-28'),
      prezzo: 24.99,
      disponibile: true,
      imgCopertina: 'assets/outer-wilds.jpg'
    },
    {
      id: 7,
      titolo: 'OMORI',
      descrizione: 'RPG psicologico horror dall\'art design interessante con forti temi emotivi',
      genere: 'RPG',
      dataRilascio: new Date('2020-12-25'),
      prezzo: 29.99,
      disponibile: false,
      imgCopertina: 'assets/omori.jpg'
    },
    {
      id: 8,
      titolo: 'Child of Light',
      descrizione: 'RPG fantasy artistico con combattimenti a turni con temi toccanti',
      genere: 'RPG',
      dataRilascio: new Date('2014-04-29'),
      prezzo: 14.99,
      disponibile: true,
      imgCopertina: 'assets/child-of-light.jpg'
    },
    {
      id: 9,
      titolo: 'Kenshi',
      descrizione: 'RPG sandbox open-world gestionale e survival isometrico in un mondo post-apocalittico',
      genere: 'RPG',
      dataRilascio: new Date('2018-12-06'),
      prezzo: 29.99,
      disponibile: false,
      imgCopertina: 'assets/kenshi.jpg'
    },
    {
      id: 10,
      titolo: "Demon's Souls",
      descrizione: 'Remake del primo Souls-like della nota From Software',
      genere: 'ARPG',
      dataRilascio: new Date('2020-11-12'),
      prezzo: 69.99,
      disponibile: true,
      imgCopertina: 'assets/demons-souls.jpg'
    }
  ];

  getGiochi(): Gioco[] {
    return this.giochi;
  }

  getGioco(id: number): Gioco | undefined {
    return this.giochi.find(g => g.id === id);
  }

  aggiungiGioco(gioco: Omit<Gioco, 'id'>): void {
    const nuovoGioco = {
      ...gioco,
      id: Math.max(...this.giochi.map(g => g.id)) + 1
    };
    this.giochi.push(nuovoGioco);
  }

  aggiornaDisponibilita(id: number, disponibile: boolean): void {
    const gioco = this.giochi.find(g => g.id === id);
    if (gioco) {
      gioco.disponibile = disponibile;
    }
  }
}