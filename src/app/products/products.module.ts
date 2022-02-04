import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsApiService, ProductsService} from './services';
import { ProductsComponent } from './components';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsService,
    ProductsApiService
  ]
})
export class ProductsModule { }
