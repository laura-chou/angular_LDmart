import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductInfo } from '../product-info';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule, MatIconModule ],
  template: `
  <mat-card class="product-card" appearance="outlined">
      <mat-card-header>
        <!--<div mat-card-avatar class="product-header-image"></div>-->
        <!--<mat-card-title>{{ productInfo.mainCategoryName }} > {{ productInfo.subCategoryName }}</mat-card-title>-->
        <mat-card-title>{{ productInfo.name }}</mat-card-title>
        <mat-card-subtitle>{{ productInfo.brandName }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="assets/products/{{ productInfo.mainCategoryId }}-{{ productInfo.subCategoryId }}-{{ productInfo.id }}.jpg" >
      <mat-card-content>
        <p>
          {{productInfo.description}}
        </p>
      </mat-card-content>
      <mat-card-actions>
          <button mat-fab>
            <mat-icon>favorite</mat-icon>
          </button> 
          <button mat-fab>
            <mat-icon>add_shopping_cart</mat-icon>
          </button>
      </mat-card-actions>
  </mat-card>  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productInfo!: ProductInfo;
}
