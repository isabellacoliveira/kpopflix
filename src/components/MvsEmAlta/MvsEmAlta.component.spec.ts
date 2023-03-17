/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MvsEmAltaComponent } from './MvsEmAlta.component';

describe('MvsEmAltaComponent', () => {
  let component: MvsEmAltaComponent;
  let fixture: ComponentFixture<MvsEmAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvsEmAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvsEmAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
