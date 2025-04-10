import { Component, Input, AfterViewInit, WritableSignal } from '@angular/core';
import { Product } from '../product-panel/product-panel.service';
import { UpdateFunc } from '../product-panel/product-panel.component';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required: true}) product!: Product;
  @Input({required: true}) priceVal!: WritableSignal<number>;


  handleClick() {
    this.priceVal.update((value) => value + this.product.price)
  }

}
