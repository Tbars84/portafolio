/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandingHome } from './landing-home.component';

describe('LandingHome', () => {
  let component: LandingHome;
  let fixture: ComponentFixture<LandingHome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingHome ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
