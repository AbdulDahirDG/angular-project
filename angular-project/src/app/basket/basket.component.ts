import { Component, Input, signal } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { WritableSignal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-basket',
  imports: [ProductListComponent, MatButtonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
  standalone: true
})
export class BasketComponent {

  @Input({required: true}) priceVal!: WritableSignal<number>;
  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  handleCheckout(){
    this.priceVal.set(0)
    this.productList.set([])
  }

}

@Component({
  selector: "app-checkout-message",
  imports: [MatDialogModule],
  templateUrl: './checkout-message.component.html',
  styles:``,
})
export class CheckoutMessage{

}
