import { isProperty } from '@smart-clone/helpers/property';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';
import { AnyPaint } from 'mapbox-gl';

export const propertyListPaint = {
  'circle-radius': 30,
  'circle-color': '#fecccc',
  'circle-opacity': 0.75,
  'circle-stroke-width': 3,
  'circle-stroke-color': '#e09494',
  'circle-stroke-opacity': 1,
};

export const propertyPaint = {
  ...propertyListPaint,
  'circle-color': '#75acff',
  'circle-stroke-color': '#5193f7',
};

export const toPaint = (data: Property | PropertyList | undefined): AnyPaint => {
  if (data === undefined) return {};

  return isProperty(data) ? propertyPaint : propertyListPaint;
};
