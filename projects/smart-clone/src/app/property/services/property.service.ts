import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@smart-clone/env/environment';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';

const API_URL = environment.smart.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  getPropertyList(listID: number) {
    const params = { params: { listID } };
    return this.http.get<PropertyList>(API_URL + '/listItems.aspx', params);
  }

  getProperty(listID: number, propertyID: number) {
    const params = { params: { listID, propertyID } };
    return this.http.get<Property>(API_URL + '/propertyItem.aspx', params);
  }
}
