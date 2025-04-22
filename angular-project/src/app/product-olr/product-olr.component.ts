import { Component, Input, WritableSignal } from '@angular/core';
import { Product } from '../product-panel/product-panel.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-olr',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-olr.component.html',
  styleUrl: './product-olr.component.css'
})
export class ProductOLRComponent {

  @Input({required: true}) product!: Product;
  @Input({required: true}) total!: WritableSignal<number>;
  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  handleClick() {
    this.total.update((value) => value + this.product.price)
    if (this.productList().some(product => product.name === this.product.name)) {
      this.productList.update((productLs) => productLs.map((item) =>  item.name == this.product.name ? {name: item.name, count: item.count + 1} : {name: item.name, count: item.count}))
    } else {
      this.productList.update((productLs) => [...productLs, {name: this.product.name, count: 1}])
    }

    

  }

}
