import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Property } from '@smart-clone/models/property.model';

@Component({
  selector: 'smart-clone-property-details-header',
  templateUrl: './property-details-header.component.html',
  styleUrls: ['./property-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailsHeaderComponent {
  @Input() isLoading: boolean | null = false;
  @Input() property?: Property | null;
}
