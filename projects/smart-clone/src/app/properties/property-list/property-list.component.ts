import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedPropertyList } from '@smart-clone/shared/state/properties/properties.actions';
import { selectCurrentPropertyList } from '@smart-clone/shared/state/properties/properties.selectors';

import { PropertyListService } from './property-list.service';

@Component({
  selector: 'smart-clone-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  selectedPropertyList$ = this.store.select(selectCurrentPropertyList);

  constructor(private propertyListService: PropertyListService, private store: Store) {}

  ngOnInit(): void {
    this.propertyListService
      .getPropertyList(5363950)
      .subscribe(propertyList => this.store.dispatch(selectedPropertyList(propertyList)));
  }
}
