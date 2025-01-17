import { Routes } from '@angular/router';
import { ListaGiochiComponent } from './components/lista-giochi/lista-giochi.component';
import { DettaglioGiocoComponent } from './components/dettaglio-gioco/dettaglio-gioco.component';
import { FormPrenotazioneComponent } from './components/form-prenotazione/form-prenotazione.component';

export const routes: Routes = [
  { path: '', redirectTo: '/giochi', pathMatch: 'full' },
  { path: 'giochi', component: ListaGiochiComponent },
  { path: 'gioco/:id', component: DettaglioGiocoComponent },
  { path: 'prenota/:id', component: FormPrenotazioneComponent },
  //fallback
  { path: '**', redirectTo: '/giochi' }
];
