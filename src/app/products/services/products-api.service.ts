import {Observable} from 'rxjs';

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';

import {Products} from '../models';

@Injectable()
export class ProductsApiService {
  private baseUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {
  }

  fetchProducts(): Observable<Products> {
    return this.http.get<Products>(this.baseUrl);
  }
}
