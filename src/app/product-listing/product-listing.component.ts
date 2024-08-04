import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { ProductInfo } from '../product-info';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [ CommonModule, ProductComponent ],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent implements OnInit {
  productList: ProductInfo[] = [];
  ngOnInit(): void {
    this.productList  = [
      {
        id: 1,
        name: "White Pepper",
        description: "Organic white pepper.",
        mainCategoryId: 1,
        mainCategoryName: "Grocery",
        subCategoryId: 1,
        subCategoryName: "Herbs & Spices",
        price: 1.99,
        inventory: 999,
        brandId: 1,
        brandName: 'Simply Organics'
      },
      {
        id: 2,
        name: "Montreal Steak Seasoning",
        description: "Shake on this iconic blend of coarsely ground peppers, garlic and spices for bolder tasting beef, pork and seafood.",
        mainCategoryId: 1,
        mainCategoryName: "Grocery",
        subCategoryId: 1,
        subCategoryName: "Herbs & Spices",
        price: 4.50,
        inventory: 999,
        brandId: 2,
        brandName: 'McCormick Grill Mates'
      }
  
    ];
  }
  

  
}
