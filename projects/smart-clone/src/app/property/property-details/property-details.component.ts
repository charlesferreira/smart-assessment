import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectProperty } from '@smart-clone/state/property/property.actions';
import { currentProperty } from '@smart-clone/state/property/property.selectors';

@Component({
  selector: 'smart-clone-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  property$ = this.store.select(currentProperty);

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const listID = +this.route.snapshot.paramMap.get('listID')!;
    const propertyID = +this.route.snapshot.paramMap.get('propertyID')!;
    this.store.dispatch(selectProperty({ listID, propertyID }));
  }
}
