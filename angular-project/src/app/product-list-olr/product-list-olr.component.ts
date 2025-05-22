import { Component, Input, WritableSignal } from '@angular/core';
import { ProductListItemComponent } from "../product-list-item/product-list-item.component";

@Component({
  selector: 'app-product-list-olr',
  imports: [ProductListItemComponent],
  templateUrl: './product-list-olr.component.html',
  styleUrl: './product-list-olr.component.scss'
})
export class ProductListOLRComponent {

  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  handleRemove($event: string) {
    this.productList().filter((product) => product.name !== $event)
  }

}
