import { Component, OnInit, ElementRef } from '@angular/core';
import { progressBarItemIn, experienceIn } from '../../interfaces/landing-interfaces';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHome implements OnInit {
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
    { name: 'Creciendo una nación', bgUrl: './assets/works/creciendo-nacion.png', description: 'Participación como desarrollador FrontEnd en la creación de Serie web de Bancoldex', season: '2016 - 2017', iconUrl: './assets/works/iconos/wordpress-icon.svg' },
    { name: 'Ilumno', bgUrl: './assets/works/ilumno.png', description: 'MOnitoreo y soporte de comunidad de estudio como Desarrollador Frontend para un correcto funcionamiento conforme a las necesidades del cliente', season: '2018', iconUrl: './assets/works/iconos/wordpress-icon.svg' },
    { name: 'FincApp', bgUrl: './assets/works/fincApp.png', description: 'Intervención como desarrollador FronEnd en la construcción de la aplicación web', season: '2018 - 2019', iconUrl: './assets/works/iconos/angular-icon.svg' },
  ]


  constructor() { }

  ngOnInit() {}

}
