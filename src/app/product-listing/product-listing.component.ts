import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ProductInfo } from '../product-info';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [ProductComponent],
  template: `
    <section>
      <app-product></app-product>
    </section>
  `,
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {
  productList: ProductInfo[] = [];
}
