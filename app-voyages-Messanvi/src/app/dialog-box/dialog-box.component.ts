import { Component, Inject, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
     @Inject(MAT_DIALOG_DATA) public newForfait: Forfait) { }

  ngOnInit(): void {
  }

  onAnnulerClick(): void {
    this.dialogRef.close();
  }
}
