import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { progressBarItemIn, experienceIn } from '../../interfaces/landing-interfaces';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHome implements OnInit, AfterViewInit {

  // ARRAY INFO
  arrExpertise: progressBarItemIn[] = [
    { name: 'Photoshop', expertise: '80' },
    { name: 'Illustrator', expertise: '60' },
    { name: 'Adobe XD', expertise: '45' },
    { name: 'HTML / CSS', expertise: '85' },
    { name: 'JAVASCRIPT', expertise: '45' },
    { name: 'ANGULAR / TYPESCRIPT', expertise: '65' },
    { name: 'WORDPRESS', expertise: '80' },
    { name: 'ENGLISH', expertise: '70', description: 'IELTS certificade' },
  ]
  arrExperience: experienceIn[] = [
    { name: 'VideoBase Agencia', bgUrl: './assets/works/video-base.jpg', description: 'Participación como desarrollador FrontEnd en la realización del portafolio empresarial de la Agencia de comunicaciones Video Base', season: '2016 - 2017', iconUrl: './assets/works/iconos/wordpress-icon.svg' },
    { name: 'Ilumno', bgUrl: './assets/works/ilumno.png', description: 'MOnitoreo y soporte de comunidad de estudio como Desarrollador Frontend para un correcto funcionamiento conforme a las necesidades del cliente', season: '2018', iconUrl: './assets/works/iconos/wordpress-icon.svg' },
    { name: 'FincApp', bgUrl: './assets/works/fincApp.png', description: 'Intervención como desarrollador FronEnd en la construcción de la aplicación web', season: '2018 - 2019', iconUrl: './assets/works/iconos/angular-icon.svg' },
    { name: 'Creciendo una nación', bgUrl: './assets/works/creciendo-nacion.png', description: 'Participación como desarrollador FrontEnd en la creación de Serie web de Bancoldex', season: '2016 - 2017', iconUrl: './assets/works/iconos/wordpress-icon.svg' },
  ]


  constructor(private _body: ElementRef) { }

  ngOnInit() {}
  ngAfterViewInit(){

    // MEDIDAS GLOBALES PARA ANIMACION DE SCROLL
    const dom = this._body;
    const textSection1 = this._body.nativeElement.querySelector('#perfilDesc');
    const textSection2 = this._body.nativeElement.querySelector('#perfilComplem');
    const scrollBtn = this._body.nativeElement.querySelector('.btn-scroll');
    scrollBtn.addEventListener('click', () =>{
      window.scroll({
        top: textSection1.offsetTop ,
        left: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', function(e){
      console.log(window.pageYOffset, textSection1.offsetTop, textSection2.offsetTop);

      if (window.pageYOffset >= (textSection1.offsetTop - 380)) {
        if (dom.nativeElement.querySelector('.contenedor--info.hide-animate')) {
          dom.nativeElement.querySelector('.contenedor--info.hide-animate').classList.add("show-animate");
          dom.nativeElement.querySelector('.contenedor--info.hide-animate').classList.remove("hide-animate");
        }
      }else{
        if (dom.nativeElement.querySelector('.contenedor--info.show-animate')) {
          dom.nativeElement.querySelector('.contenedor--info.show-animate').classList.add("hide-animate");
          dom.nativeElement.querySelector('.contenedor--info.show-animate').classList.remove("show-animate");
        }
      }
      if (window.pageYOffset >= (textSection2.offsetTop - 380)) {
        if (dom.nativeElement.querySelector('.contenedor--info.invertido.hide-animate')) {
          dom.nativeElement.querySelector('.contenedor--info.invertido.hide-animate').classList.add("show-animate");
          dom.nativeElement.querySelector('.contenedor--info.invertido.hide-animate').classList.remove("hide-animate");
        }
      } else {
        if (dom.nativeElement.querySelector('.contenedor--info.invertido.show-animate')) {
          dom.nativeElement.querySelector('.contenedor--info.invertido.show-animate').classList.add("hide-animate");
          dom.nativeElement.querySelector('.contenedor--info.invertido.show-animate').classList.remove("show-animate");
        }
      }

    })
  }
}
