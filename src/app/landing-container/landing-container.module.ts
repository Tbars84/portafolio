import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHome } from './main-components/landing-home/landing-home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';

@NgModule({
  declarations: [
    LandingHome,
    InicioComponent,
    PerfilComponent,
    HabilidadesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LandingHome
  ]
})
export class LandingContainerModule { }
