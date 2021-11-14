import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Property } from '@smart-clone/models/property.model';
import { selectProperty } from '@smart-clone/state/property/property.actions';
import { currentProperty } from '@smart-clone/state/property/property.selectors';
import { isLoading } from '@smart-clone/state/shared/shared.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'smart-clone-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit, OnDestroy {
  isLoading = false;
  property?: Property;

  private sub = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.dispatchSelectAction();
    this.subscribeToStore();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private dispatchSelectAction(): void {
    const listID = +this.route.snapshot.paramMap.get('listID')!;
    const propertyID = +this.route.snapshot.paramMap.get('propertyID')!;
    this.store.dispatch(selectProperty({ listID, propertyID }));
  }

  private subscribeToStore(): void {
    this.sub.add(this.store.select(isLoading).subscribe(isLoading => (this.isLoading = isLoading)));
    this.sub.add(this.store.select(currentProperty).subscribe(property => (this.property = property)));
  }
}
