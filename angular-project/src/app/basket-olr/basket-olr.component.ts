import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductListOLRComponent } from '../product-list-olr/product-list-olr.component';
import { DialogOLRComponent } from '../dialog-olr/dialog-olr.component';
import { BasketOLRService } from './basket-olr.service';

@Component({
  selector: 'app-basket-olr',
  imports: [CommonModule, ProductListComponent, ProductListOLRComponent, DialogOLRComponent, BasketOLRService],
  templateUrl: './basket-olr.component.html',
  styleUrl: './basket-olr.component.css'
})
export class BasketOLRComponent {

  @Input({required: true}) total!: WritableSignal<number>;
  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  basketOLRService = inject(BasketOLRService)

  dialogStatus = signal(false)

  handleCheckout() {
    this.dialogStatus.set(true)
  }

}
