import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPrincipleComponent } from './select-principle.component';

describe('SelectPrincipleComponent', () => {
  let component: SelectPrincipleComponent;
  let fixture: ComponentFixture<SelectPrincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPrincipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
