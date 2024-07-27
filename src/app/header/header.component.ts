import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header">
      <img src="assets/logo.png" >
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
