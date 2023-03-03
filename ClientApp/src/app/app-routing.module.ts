import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InternaDadosPlanoComponent } from './interna-dados-plano/interna-dados-plano.component'


const routes: Routes = [
  { path: 'dados', component: InternaDadosPlanoComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
