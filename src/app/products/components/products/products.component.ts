import {mapTo, merge, of} from 'rxjs';

import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ProductsService} from '../../services';
import {Product} from '../../models';

type ProductEntry = Readonly<{ propName: keyof Product, propValue: unknown}>

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  products$ = this.productsService.products$;
  loading$ = merge(of(true), this.products$.pipe(mapTo(false)));

  selectedProduct: Product = null;

  constructor(private productsService: ProductsService) { }

  get selectedProductProps(): ProductEntry[] {
    if (!this.selectedProduct) return null;

    const productEntries = <[keyof Product, unknown][]> Object.entries(this.selectedProduct) ;

    return productEntries.map(([key, value]) => ({propName: key, propValue: value}));
  }

  isProductSelected(productId: number): boolean {
    if (!this.selectedProduct) return false;

    return this.selectedProduct.ProductId === productId;
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  resetProduct(): void {
    this.selectProduct(null);
  }
}
