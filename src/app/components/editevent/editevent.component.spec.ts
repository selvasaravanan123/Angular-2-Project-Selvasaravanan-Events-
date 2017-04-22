/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditeventComponent } from './editevent.component';

describe('EditeventComponent', () => {
  let component: EditeventComponent;
  let fixture: ComponentFixture<EditeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
