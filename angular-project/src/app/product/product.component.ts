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
  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  handleClick() {
    this.priceVal.update((value) => value + this.product.price)
    if (this.productList().some(product => product.name === this.product.name)) {
      this.productList.update((productLs) => productLs.map((item) =>  item.name == this.product.name ? {name: item.name, count: item.count + 1} : {name: item.name, count: item.count}))
    } else {
      this.productList.update((productLs) => [...productLs, {name: this.product.name, count: 1}])
    }

  }

}
