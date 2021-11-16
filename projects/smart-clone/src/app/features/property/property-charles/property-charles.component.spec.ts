import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCharlesComponent } from './property-charles.component';

describe('PropertyCharlesComponent', () => {
  let component: PropertyCharlesComponent;
  let fixture: ComponentFixture<PropertyCharlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCharlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCharlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
