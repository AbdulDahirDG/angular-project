import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ProductPanelComponent } from './product-panel/product-panel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasketComponent, ProductPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  priceVal = signal(0)

}
