import { Component } from '@angular/core';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.css']
})
export class CupsComponent {

    cups: string = ""
  calcular(){
    console.log("llega bien:" + this.cups)
  }
}
