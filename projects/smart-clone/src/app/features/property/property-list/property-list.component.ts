import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { loadPropertyList } from '@smart-clone/state/property/property.actions';
import { getCurrentPropertyList } from '@smart-clone/state/property/property.selectors';
import { isLoading } from '@smart-clone/state/shared/shared.selectors';
import { Subscription } from 'rxjs';

import { setCurrentView } from './../../../state/property/property.actions';

@Component({
  selector: 'smart-clone-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit, OnDestroy {
  isLoading$ = this.store.select(isLoading);
  propertyList$ = this.store.select(getCurrentPropertyList);

  sub = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const listID = +this.route.snapshot.paramMap.get('listID')!;
    this.store.dispatch(setCurrentView('property-list'));
    this.store.dispatch(loadPropertyList(<PropertyList>{ listID }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
