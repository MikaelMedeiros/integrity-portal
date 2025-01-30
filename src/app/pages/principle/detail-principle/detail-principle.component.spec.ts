import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPrincipleComponent } from './detail-principle.component';

describe('DetailPrincipleComponent', () => {
  let component: DetailPrincipleComponent;
  let fixture: ComponentFixture<DetailPrincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPrincipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
