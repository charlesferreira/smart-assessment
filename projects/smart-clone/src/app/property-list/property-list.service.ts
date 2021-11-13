import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { PropertyList } from '../shared/models/property-list.model';

const API_URL = environment.smart.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PropertyListService {
  constructor(private readonly http: HttpClient) {}

  getPropertyLists(listID: number) {
    const token = '5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E';
    const params = { params: { listID, token } };
    return this.http.get<PropertyList[]>(API_URL + '/listItems.aspx', params);
  }
}
