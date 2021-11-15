import { Pipe, PipeTransform } from '@angular/core';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';
import { GeoJSON } from 'geojson';

type InputType = Property | PropertyList | undefined | null;
type ReturnType = GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string | undefined;

@Pipe({
  name: 'geojson',
})
export class GeojsonPipe implements PipeTransform {
  transform(value: InputType): ReturnType {
    if (!value) return undefined;

    const isProperty = (value as Property).propertyID !== undefined;

    return isProperty ? this.transformProperty(value as Property) : this.transformPropertyList(value as PropertyList);
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
      features: propertyList.records.map(property => this.transformProperty(property) as GeoJSON.Feature),
    };
  }
}
