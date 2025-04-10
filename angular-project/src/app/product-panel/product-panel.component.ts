import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductPanelService, Product } from './product-panel.service';
import { WritableSignal } from '@angular/core';


export type UpdateFunc = (val: number) => number;

@Component({
  selector: 'app-product-panel',
  imports: [ProductComponent],
  templateUrl: './product-panel.component.html',
  styleUrl: './product-panel.component.css',
  standalone: true
})
export class ProductPanelComponent {
  constructor (private productPanelService: ProductPanelService) {}

  @Input({required: true}) priceVal!: WritableSignal<number>;
  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  public apiData: Product[] = [];

  getData() {
    this.productPanelService.getProducts().then((products) => (this.apiData = products))
  }

  ngAfterViewInit() {
    this.getData()
  }


}
