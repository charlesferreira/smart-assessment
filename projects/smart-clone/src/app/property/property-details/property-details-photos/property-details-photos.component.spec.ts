import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailsPhotosComponent } from './property-details-photos.component';

describe('PropertyDetailsPhotosComponent', () => {
  let component: PropertyDetailsPhotosComponent;
  let fixture: ComponentFixture<PropertyDetailsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDetailsPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
