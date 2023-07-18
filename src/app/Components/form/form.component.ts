import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormModels } from 'src/app/Models/FormModels';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router: Router){}
 form: FormModels = {} as FormModels
 calcular(){
  sessionStorage.setItem("form", JSON.stringify(this.form))
  this.router.navigate(['/results']);
 }
}
