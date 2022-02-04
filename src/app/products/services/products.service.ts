import {Observable, shareReplay} from 'rxjs';

import { Injectable } from '@angular/core';

import {Products} from '../models';
import {ProductsApiService} from './products-api.service';

@Injectable()
export class ProductsService {
  products$ = this.getProducts().pipe(shareReplay(1));

  constructor(private apiService: ProductsApiService) { }

  getProducts(): Observable<Products> {
    return this.apiService.fetchProducts();
  }
}
