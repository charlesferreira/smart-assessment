import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PropertyList } from '@smart-clone/models/property-list.model';

@Component({
  selector: 'smart-clone-property-list-header',
  templateUrl: './property-list-header.component.html',
  styleUrls: ['./property-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyListHeaderComponent {
  @Input() isLoading = false;
  @Input() propertyList?: PropertyList;
}
