import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  constructor(private _el: ElementRef) { }

  ngOnInit() {
    if (this._el.nativeElement.querySelector('.hamburger')) {
      const menu = this._el.nativeElement.querySelector('.hamburger');
      const prof = this._el.nativeElement.querySelector('.about-me');
      const contInfo = this._el.nativeElement.querySelector('.contenedor--info');
      const contImg = this._el.nativeElement.querySelector('.contenedor--imagen');
      this.openMenuSnack(menu, prof, contInfo, contImg);
    }
  }
  ngAfterViewInit(){
    if (this._el.nativeElement.querySelectorAll('.item-work')) {
      const arrItems = this._el.nativeElement.querySelectorAll('.item-work');
      const arrItemsWrapp = this._el.nativeElement.querySelectorAll('.item-work-wrapper');
      this.overWorks(arrItems, arrItemsWrapp);
    }

  }
  openMenuSnack(el, prof, contInfo, contImg) {
    el.addEventListener("click", function () {
      el.classList.toggle("is-active");
      if (prof) {
        prof.classList.toggle("display");
        contInfo.classList.toggle("intro");
        contImg.classList.toggle("intro");
      }

    });
  }
  overWorks(contItem, contItemWrapp) {
    contItem.forEach((element, key) => {
      this.moveItems(element, contItemWrapp[key])
    });
  }
  moveItems(contItem, inner) {
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(contItem);
    let counter = 0;
    let refreshRate = 10;
    let isTimeToUpdate = () => counter++ % refreshRate === 0;
    // HANDLERS DEL EVENTO DE CADA BOTON
    contItem.addEventListener("mouseover", (event) => { update(event) });
    contItem.addEventListener("mouseout", () => { inner.style = "" });
    contItem.addEventListener("mousemove", (event) => {
      if (isTimeToUpdate()) { update(event); }
    });
    let update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
    let updateTransformStyle = function (x, y) {
      let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  }
}


// Mouse
let mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function (event) {
    let e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function (e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
  },
  show: function () {
    return "(" + this.x + ", " + this.y + ")";
  }
};
