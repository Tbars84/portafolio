import { Component, OnInit, ElementRef, Input, AfterViewInit } from '@angular/core';
import { progressBarItemIn } from '../../interfaces/landing-interfaces';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit, AfterViewInit {
  @Input() itemsArr: progressBarItemIn[];

  constructor(private _el: ElementRef) { }

  ngOnInit() {}
  ngAfterViewInit(){
    if (this._el.nativeElement.querySelectorAll('.bar')) {
      const arrBars = this._el.nativeElement.querySelectorAll('.bar');
      arrBars.forEach(element => {
        this.progressBar(element, element.getAttribute('data-expertise'));
      });
    }
  }
  progressBar(bar, progress ){
    bar.style.width = `0%`;
    setTimeout(() => {
      const randomTiming = Math.floor((Math.random() * 2) + 2);
      // console.log(randomTiming);
      bar.style.transitionDuration = `${randomTiming}s`;
      bar.style.width = `${progress}%`;
    }, 1200);

    // bar.forEach((bar, index) => {
    //   bar.style.width = `0%`;
    //   setTimeout(() => {
    //     const randomTiming = Math.floor((Math.random() * 2) + 2);
    //     console.log(randomTiming);
    //     bar.style.transitionDuration = `${randomTiming}s`;
    //     bar.style.width = `${progress}%`;
    //   }, 1200);
    // })
  }
}
