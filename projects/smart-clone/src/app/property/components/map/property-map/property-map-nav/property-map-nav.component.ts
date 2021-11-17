import { Component, Input } from '@angular/core';

@Component({
  selector: 'smart-clone-property-map-nav',
  templateUrl: './property-map-nav.component.html',
  styleUrls: ['./property-map-nav.component.scss'],
})
export class PropertyMapNavComponent {
  @Input() isLoading = false;
}
