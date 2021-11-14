import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'smart-clone-property-details-photos',
  templateUrl: './property-details-photos.component.html',
  styleUrls: ['./property-details-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailsPhotosComponent {
  @Input() photos: string[] = [];
}
