import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponentComponent } from './main-components/landing-component/landing-component.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    LandingComponentComponent,
    InicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LandingComponentComponent
  ]
})
export class LandingContainerModule { }
