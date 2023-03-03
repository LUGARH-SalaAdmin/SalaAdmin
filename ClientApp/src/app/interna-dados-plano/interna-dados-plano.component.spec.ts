import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternaDadosPlanoComponent } from './interna-dados-plano.component';

describe('InternaDadosPlanoComponent', () => {
  let component: InternaDadosPlanoComponent;
  let fixture: ComponentFixture<InternaDadosPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaDadosPlanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternaDadosPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
