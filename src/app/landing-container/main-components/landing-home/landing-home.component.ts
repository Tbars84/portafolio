import { Component, OnInit } from '@angular/core';
import { progressBarItem } from '../../interfaces/landing-interfaces';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHome implements OnInit {
  arrExpertise: progressBarItem[] = [
    { name: 'Photoshop', expertise: '80' },
    { name: 'Illustrator', expertise: '60' },
    { name: 'Adobe XD', expertise: '45' },
    { name: 'HTML / CSS', expertise: '85' },
    { name: 'JAVASCRIPT', expertise: '45' },
    { name: 'ANGULAR / TYPESCRIPT', expertise: '65' },
    { name: 'WORDPRESS', expertise: '80' },
    { name: 'ENGLISH', expertise: '70', description: 'IELTS certificade' },
  ]


  constructor() { }

  ngOnInit() {
  }

}
