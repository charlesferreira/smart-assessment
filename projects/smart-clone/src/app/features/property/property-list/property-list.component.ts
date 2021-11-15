import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { selectPropertyList } from '@smart-clone/state/property/property.actions';
import { currentPropertyList } from '@smart-clone/state/property/property.selectors';
import { isLoading } from '@smart-clone/state/shared/shared.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'smart-clone-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit, OnDestroy {
  isLoading = false;
  propertyList?: PropertyList;

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
    this.store.dispatch(selectPropertyList({ listID }));
  }

  private subscribeToStore(): void {
    this.sub.add(this.store.select(isLoading).subscribe(isLoading => (this.isLoading = isLoading)));
    this.sub.add(this.store.select(currentPropertyList).subscribe(propertyList => (this.propertyList = propertyList)));
  }
}
