import { LandingContainerModule } from './landing-container/landing-container.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      LandingContainerModule,
      SweetAlert2Module.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
