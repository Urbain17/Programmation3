import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-forfait-special',
  templateUrl: './forfait-special.component.html',
  styleUrls: ['./forfait-special.component.css']
})
export class ForfaitSpecialComponent implements OnInit {

  forfaits : Forfait[];
  constructor(private forfaitService: ForfaitService) { }
  ngOnInit(): void {
    
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }

}
