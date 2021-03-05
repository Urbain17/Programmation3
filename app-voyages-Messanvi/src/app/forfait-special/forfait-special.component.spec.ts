import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitSpecialComponent } from './forfait-special.component';

describe('ForfaitSpecialComponent', () => {
  let component: ForfaitSpecialComponent;
  let fixture: ComponentFixture<ForfaitSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
