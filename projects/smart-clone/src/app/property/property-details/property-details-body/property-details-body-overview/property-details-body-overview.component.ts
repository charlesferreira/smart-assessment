import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Property } from '@smart-clone/models/property.model';

@Component({
  selector: 'smart-clone-property-details-body-overview',
  templateUrl: './property-details-body-overview.component.html',
  styleUrls: ['./property-details-body-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailsBodyOverviewComponent {
  @Input() property!: Property;
}
