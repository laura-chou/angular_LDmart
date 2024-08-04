import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <img src="assets/icon.png" >
      <p>LD Mart</p>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
