import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectPropertyList } from '@smart-clone/state/property/property.actions';
import { currentPropertyList } from '@smart-clone/state/property/property.selectors';
import { isLoading } from '@smart-clone/state/shared/shared.selectors';

@Component({
  selector: 'smart-clone-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  isLoading$ = this.store.select(isLoading);

  propertyList$ = this.store.select(currentPropertyList);

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const listID = +this.route.snapshot.paramMap.get('listID')!;

    this.store.dispatch(selectPropertyList({ listID }));
  }
}
