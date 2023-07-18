import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  id: string = ""
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')??""
    this.calcular()
  }
  calcular(){
    if(this.id)
      console.log(this.id)
    else
      this.calcularForm()
  }
  calcularForm(){
    let form = sessionStorage.getItem("form")
    console.log("calculo por formularios")
    console.log(form)
  }
}
