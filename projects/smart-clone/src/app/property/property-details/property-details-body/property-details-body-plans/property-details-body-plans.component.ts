import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Property } from '@smart-clone/models/property.model';

@Component({
  selector: 'smart-clone-property-details-body-plans',
  templateUrl: './property-details-body-plans.component.html',
  styleUrls: ['./property-details-body-plans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailsBodyPlansComponent {
  @Input() property?: Property;
}
