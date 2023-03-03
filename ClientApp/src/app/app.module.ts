import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TabsMenuComponent } from './tabs-menu/tabs-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { ImplantacaoComponent } from './implantacao/implantacao.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ComunicacaoComponent } from './comunicacao/comunicacao.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TabsMenuComponent,
    DashboardComponent,
    EmpresasComponent,
    AdministradoresComponent,
    ImplantacaoComponent,
    RelatoriosComponent,
    ComunicacaoComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'empresas', component: EmpresasComponent },
      { path: 'administradores', component: AdministradoresComponent },
      { path: 'implantacao', component: ImplantacaoComponent },
      { path: 'relatorios', component: RelatoriosComponent },
      { path: 'comunicacao', component: ComunicacaoComponent },
    ]),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
