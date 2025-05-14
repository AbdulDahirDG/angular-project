import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasketOLRComponent } from './basket-olr/basket-olr.component';
import { ProductPanelComponent } from './product-panel/product-panel.component';
import { BannerOLRComponent } from './banner-olr/banner-olr.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductPanelComponent, BasketOLRComponent, BannerOLRComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  total = signal(0)
  productList = signal<{name: string, count: number}[]>([])

}
