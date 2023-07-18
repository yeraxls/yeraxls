import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormModels } from 'src/app/Models/FormModels';
import { CalculoServiceService } from 'src/app/Services/calculo-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  constructor(private route: ActivatedRoute, private calculoService: CalculoServiceService) {}
  ngOnInit(): void {
    let cups = this.route.snapshot.paramMap.get('id')??""
    cups? this.calcular(cups) : this.calcularForm()
  }
  calcular(cups: string){
    this.calculoService.calcularPorCups(cups) 
  }
  calcularForm(){
    let form : FormModels = JSON.parse(sessionStorage.getItem("form")??"")
    this.calculoService.calcularForm(form)
  }
  contratar(){
    console.log("Contratar con nosotros")
  }
}
