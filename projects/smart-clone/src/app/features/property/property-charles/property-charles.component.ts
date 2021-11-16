import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCurrentView } from '@smart-clone/state/property/property.actions';

@Component({
  selector: 'smart-clone-property-charles',
  templateUrl: './property-charles.component.html',
  styleUrls: ['./property-charles.component.scss'],
})
export class PropertyCharlesComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(setCurrentView('property-charles'));
  }
}
