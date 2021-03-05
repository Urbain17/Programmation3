import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCovid19Component } from './information-covid19.component';

describe('InformationCovid19Component', () => {
  let component: InformationCovid19Component;
  let fixture: ComponentFixture<InformationCovid19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationCovid19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
