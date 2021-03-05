import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatMenuModule } from '@angular/material/menu';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule  } from '@angular/material/input';
import { AproposComponent } from './apropos/apropos.component';
import { NouscontacterComponent } from './nouscontacter/nouscontacter.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForfaitSpecialComponent } from './forfait-special/forfait-special.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { GraphiquesComponent } from './graphiques/graphiques.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';
import { ForfaitService } from './forfait.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ChartsModule } from 'ng2-charts';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AproposComponent,
    NouscontacterComponent,
    AccueilComponent,
    EtoilesComponent,
    ForfaitCompletComponent,
    ForfaitSpecialComponent,
    FormulaireRechercheComponent,
    GraphiquesComponent,
    MiniForfaitComponent,
    TableForfaitsComponent,
    DialogBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    ChartsModule
    
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
