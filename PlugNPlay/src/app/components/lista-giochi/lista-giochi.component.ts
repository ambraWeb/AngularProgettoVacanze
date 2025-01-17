/*
componente che mostra la lista dei giochi disponibili nel catalogo
Gestisce la navigazione al form e
DOVREBBE anche gestire l'apertura della modale per i dettagli
*/

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
  // array dei giochi recuperati dal service
  giochi: Gioco[] = [];
  
  // proprietà per gestire la modale
  giocoSelezionato?: Gioco;
  mostraModale = false;

  constructor(
    private giocoService: GiocoService,
    private router: Router,
    private prenotazioneService: PrenotazioneService
  ) {
    // recupera i giochi dal service
    this.giochi = this.giocoService.getGiochi();
  }

  // FIXME metodo per aprire modale
  apriDettaglio(gioco: Gioco) {
    this.giocoSelezionato = gioco;
    this.mostraModale = true;
  }

  // metodo per chiudere la modale dei dettagli
  chiudiModale() {
    this.mostraModale = false;
    this.giocoSelezionato = undefined;
  }

  // gestisce il click sui pulsanti acquista/prenota
  onClick(gioco: Gioco) {
    if (gioco.disponibile) {
      // se il gioco è disponibile acquista
      this.prenotazioneService.effettuaAcquisto(gioco.id, gioco.prezzo);
      alert(`${gioco.titolo} è tutto tuo!`);
    } else {
      // sennò manda al form di prenotazione
      this.router.navigate(['/prenota', gioco.id]);
    }
  }
}
