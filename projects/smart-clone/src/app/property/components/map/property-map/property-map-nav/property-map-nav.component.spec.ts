import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMapNavComponent } from './property-map-nav.component';

describe('PropertyMapNavComponent', () => {
  let component: PropertyMapNavComponent;
  let fixture: ComponentFixture<PropertyMapNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyMapNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyMapNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
