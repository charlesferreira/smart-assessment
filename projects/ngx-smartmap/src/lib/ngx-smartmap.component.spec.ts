import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartmapComponent } from './ngx-smartmap.component';

describe('NgxSmartmapComponent', () => {
  let component: NgxSmartmapComponent;
  let fixture: ComponentFixture<NgxSmartmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSmartmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
