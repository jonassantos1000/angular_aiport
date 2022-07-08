/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NovoClientComponent } from './novoClient.component';

describe('NovoClientComponent', () => {
  let component: NovoClientComponent;
  let fixture: ComponentFixture<NovoClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
