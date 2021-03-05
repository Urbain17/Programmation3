import { Component, OnInit, ViewChild } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide

import { MatDialog } from '@angular/material/dialog';


import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-table-forfaits',
  templateUrl: './table-forfaits.component.html',
  styleUrls: ['./table-forfaits.component.css']
})
export class TableForfaitsComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  
  forfaits : Forfait[];
  columnsToDisplay:string[] = ['destination', 'villeDepart', 'nomHotel', 'coordonnees', 'nombreEtoiles', 'nombreChambres', 'caracteristiques','dateDepart', 'dateRetour', 'prix', 'rabais', 'vedette', 'actions'];
  newForfait : Forfait;
  selectedForfait: Forfait;
  tableForfaits: any;
  

  constructor(public dialog: MatDialog, private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.newForfait = {_id: null, da:'1996417', destination:'', villeDepart:'', hotel: {nom:'', coordonnees:'', nombreEtoiles:0, nombreChambres:0, caracteristiques:[]}, dateDepart:'', dateRetour:'', prix:0, rabais:0, vedette:false};
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }

  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm) {
    if(forfaitFormAjout.valid) {
      this.forfaitService.addForfait(this.newForfait)
          .subscribe(forfait  => { this.forfaits.push(forfait); forfaitFormAjout.resetForm(); tableForfaits.renderRows();});
    }
  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }

  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid) {
      this.forfaitService.updateForfait(this.selectedForfait)
          .subscribe(() => this.selectedForfait = null);
    }
   }
   
   onDelete(forfait: Forfait): void {
    this.forfaitService.deleteForfait(forfait._id)
        .subscribe(result => this.forfaits = this.forfaits.filter(h => h !== forfait));
   }

   
   openDialogBox(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: this.newForfait
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.newForfait = result;
        //console.log(this.newForfait);
        this.forfaitService.addForfait(this.newForfait)
            .subscribe(forfait  => { this.forfaits.push(forfait); 
              console.log(forfait);
              this.newForfait.destination = ''; 
              this.newForfait.villeDepart=''; 
              this.newForfait.hotel.nom='';
              this.newForfait.hotel.coordonnees=''; 
              this.newForfait.hotel.nombreEtoiles=0; 
              this.newForfait.hotel.nombreChambres=0; 
              this.newForfait.hotel.caracteristiques=[]; 
              this.newForfait.villeDepart=''; 
              this.newForfait.dateRetour=''; 
              this.newForfait.prix=0; 
              this.newForfait.rabais=0; 
              this.newForfait.vedette=false; 
              this.table.renderRows()
              });
      }
    });
   }




}
