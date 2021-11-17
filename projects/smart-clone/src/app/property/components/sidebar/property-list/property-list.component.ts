import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { loadPropertyList, setCurrentView } from '@smart-clone/property/state/property.actions';
import { getCurrentPropertyList } from '@smart-clone/property/state/property.selectors';
import { isLoading } from '@smart-clone/shared/state/shared.selectors';
import { Subscription } from 'rxjs';

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
