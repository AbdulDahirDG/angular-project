import { Component, input, output } from '@angular/core';
import { Product } from '../product-panel/product-panel.service';

@Component({
  selector: 'app-product-list-item',
  imports: [],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  
  product = input<{name: string, count: number}>({"name":"name", "count": -1})

  remove = output<string>()

  handleClick() {
    this.remove.emit(this.product().name)
  }

}
