import { Component } from '@angular/core';
import { Forfait } from "./forfait";
import { FORFAITS } from  "./mock-forfaits";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-Messanvi';
  forfaits : Forfait[] = FORFAITS;

}


