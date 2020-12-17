import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormulaireGestionForfaitComponent } from './formulaire-gestion-forfait/formulaire-gestion-forfait.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule  } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    FormulaireGestionForfaitComponent,
    FormulaireRechercheComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
