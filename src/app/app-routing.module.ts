import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupsComponent } from './Components/cups/cups.component';
import { FormComponent } from './Components/form/form.component';
import { ResultsComponent } from './Components/results/results.component';

const routes: Routes = [
  {path:"", component: CupsComponent},
  {path:"form", component: FormComponent},
  {path:"results/:id", component: ResultsComponent},
  {path:"results", component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
