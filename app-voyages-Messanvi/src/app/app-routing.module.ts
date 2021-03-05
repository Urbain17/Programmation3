import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ForfaitSpecialComponent } from './forfait-special/forfait-special.component';
import { GraphiquesComponent } from './graphiques/graphiques.component';
import { NouscontacterComponent } from './nouscontacter/nouscontacter.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';

const routes: Routes = [
  {path:'apropos', component: AproposComponent},
  {path:'nouscontacter', component: NouscontacterComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'graphiques', component: GraphiquesComponent},
  {path:'forfaity', component: ForfaitSpecialComponent},
  {path:'forfaitz/:destination', component: ForfaitSpecialComponent},
  {path:'gestiondesforfaits', component: TableForfaitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
