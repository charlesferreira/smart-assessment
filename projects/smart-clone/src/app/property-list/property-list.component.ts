import { Component, OnInit } from '@angular/core';

import { PropertyListService } from './property-list.service';

@Component({
  selector: 'smart-clone-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  constructor(private readonly propertyListService: PropertyListService) {}

  ngOnInit(): void {
    this.propertyListService.getPropertyLists(5363950).subscribe(propertyLists => {
      console.log(propertyLists);
    });
  }
}
