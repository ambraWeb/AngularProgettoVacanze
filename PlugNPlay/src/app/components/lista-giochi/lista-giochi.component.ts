import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { GiocoService } from '../../services/gioco.service';
import { Gioco } from '../../models/gioco.model';
import { DettaglioGiocoComponent } from '../dettaglio-gioco/dettaglio-gioco.component';
import { PrenotazioneService } from '../../services/prenotazione.service';

@Component({
  selector: 'app-lista-giochi',
  standalone: true,
  imports: [CommonModule, RouterLink, DettaglioGiocoComponent],
  templateUrl: './lista-giochi.component.html',
  styleUrl: './lista-giochi.component.css'
})
export class ListaGiochiComponent {
  giochi: Gioco[] = [];
  giocoSelezionato?: Gioco;
  mostraModale = false;

  constructor(
    private giocoService: GiocoService,
    private router: Router,
    private prenotazioneService: PrenotazioneService
  ) {
    this.giochi = this.giocoService.getGiochi();
  }

  apriDettaglio(gioco: Gioco) {
    this.giocoSelezionato = gioco;
    this.mostraModale = true;
  }

  chiudiModale() {
    this.mostraModale = false;
    this.giocoSelezionato = undefined;
  }

  onClick(gioco: Gioco) {
    if (gioco.disponibile) {
      this.prenotazioneService.effettuaAcquisto(gioco.id, gioco.prezzo);
      alert('Acquisto completato con successo!');
    } else {
      this.router.navigate(['/prenota', gioco.id]);
    }
  }
}
