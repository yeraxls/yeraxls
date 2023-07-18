import { Injectable } from '@angular/core';
import { FormModels } from '../Models/FormModels';

@Injectable({
  providedIn: 'root'
})
export class CalculoServiceService {

  constructor() { }

  public calcularPorCups(cups: string){
    console.log("calculo por cups")
    console.log(cups)
  }

  calcularForm(form: FormModels){
    console.log("calculo por formularios")
    console.log(form)
  }
}
