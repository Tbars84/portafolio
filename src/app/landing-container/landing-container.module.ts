import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHome } from './main-components/landing-home/landing-home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ExperienceComponent } from './pages/experience/experience.component';

@NgModule({
  declarations: [
    LandingHome,
    MenuComponent,
    InicioComponent,
    PerfilComponent,
    HabilidadesComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LandingHome
  ]
})

export class LandingContainerModule { }
