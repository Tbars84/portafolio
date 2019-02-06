import { LandingContainerModule } from './landing-container/landing-container.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      LandingContainerModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
