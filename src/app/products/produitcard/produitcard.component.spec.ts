import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitcardComponent } from './produitcard.component';

describe('ProduitcardComponent', () => {
  let component: ProduitcardComponent;
  let fixture: ComponentFixture<ProduitcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitcardComponent]
    });
    fixture = TestBed.createComponent(ProduitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
