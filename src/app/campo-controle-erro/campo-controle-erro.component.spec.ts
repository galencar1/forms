import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoControleErroComponent } from './campo-controle-erro.component';

describe('CampoControleErroComponent', () => {
  let component: CampoControleErroComponent;
  let fixture: ComponentFixture<CampoControleErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoControleErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoControleErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
