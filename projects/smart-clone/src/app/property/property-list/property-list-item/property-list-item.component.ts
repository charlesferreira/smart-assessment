import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Property } from '@smart-clone/models/property.model';

@Component({
  selector: 'smart-clone-property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyListItemComponent {
  @Input() property?: Property;
}
