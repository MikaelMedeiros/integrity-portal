import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSubcomponentComponent } from './select-subcomponent.component';

describe('SelectSubcomponentComponent', () => {
  let component: SelectSubcomponentComponent;
  let fixture: ComponentFixture<SelectSubcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSubcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
