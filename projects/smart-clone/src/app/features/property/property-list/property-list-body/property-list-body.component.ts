import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PropertyList } from '@smart-clone/models/property-list.model';

@Component({
  selector: 'smart-clone-property-list-body',
  templateUrl: './property-list-body.component.html',
  styleUrls: ['./property-list-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyListBodyComponent {
  @Input() propertyList?: PropertyList;
}
