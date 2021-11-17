import { Pipe, PipeTransform } from '@angular/core';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';
import { isProperty } from '@smart-clone/property/helpers/property-helpers';
import { Feature, FeatureCollection, Point } from 'geojson';

type InputType = Property | PropertyList | undefined | null;
type ReturnType = Feature<Point> | FeatureCollection<Point>;

@Pipe({
  name: 'geojson',
})
export class GeojsonPipe implements PipeTransform {
  transform(value: InputType): ReturnType {
    if (!value) return { type: 'FeatureCollection', features: [] };

    return isProperty(value)
      ? this.transformProperty(value as Property)
      : this.transformPropertyList(value as PropertyList);
  }

  private transformProperty(property: Property): ReturnType {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [property.geocode.Longitude, property.geocode.Latitude],
      },
      id: property.propertyID,
      properties: property,
    };
  }

  private transformPropertyList(propertyList: PropertyList): ReturnType {
    return {
      type: 'FeatureCollection',
      features: propertyList.records!.map(property => this.transformProperty(property) as Feature<Point>),
    };
  }
}
