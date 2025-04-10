import { Component, Input, signal } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { WritableSignal } from '@angular/core';
@Component({
  selector: 'app-basket',
  imports: [ProductListComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
  standalone: true
})
export class BasketComponent {

  @Input({required: true}) priceVal!: WritableSignal<number>;

  handleCheckout(){
    this.priceVal.set(0)
  }

}
