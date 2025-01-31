import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIndicatorsComponent } from './detail-indicators.component';

describe('DetailIndicatorsComponent', () => {
  let component: DetailIndicatorsComponent;
  let fixture: ComponentFixture<DetailIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailIndicatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
