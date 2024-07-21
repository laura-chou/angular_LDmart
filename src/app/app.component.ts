import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListingComponent } from "./product-listing/product-listing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListingComponent, MenuComponent, HeaderComponent, RouterOutlet, SharedModule, ProductListingComponent],
  template: `
    <div class="container">
      <app-header></app-header>
      <div class="main">
        <app-menu></app-menu>
        <app-product-listing></app-product-listing>
      </div>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_LDmart';
}
