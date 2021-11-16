import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Property } from '@smart-clone/models/property.model';
import { loadProperty, setCurrentView } from '@smart-clone/state/property/property.actions';
import { getCurrentProperty } from '@smart-clone/state/property/property.selectors';
import { isLoading } from '@smart-clone/state/shared/shared.selectors';

@Component({
  selector: 'smart-clone-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  isLoading$ = this.store.select(isLoading);
  property$ = this.store.select(getCurrentProperty);

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const listID = +this.route.snapshot.paramMap.get('listID')!;
    const propertyID = +this.route.snapshot.paramMap.get('propertyID')!;

    this.store.dispatch(loadProperty(<Property>{ listID, propertyID }));
    this.store.dispatch(setCurrentView('property-details'));
  }
}
