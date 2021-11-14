import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Property } from '@smart-clone/models/property.model';

@Component({
  selector: 'smart-clone-property-details-body',
  templateUrl: './property-details-body.component.html',
  styleUrls: ['./property-details-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailsBodyComponent {
  @Input() property?: Property;
}
