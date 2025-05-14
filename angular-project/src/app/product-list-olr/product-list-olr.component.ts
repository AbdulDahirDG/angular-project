import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-product-list-olr',
  imports: [],
  templateUrl: './product-list-olr.component.html',
  styleUrl: './product-list-olr.component.scss'
})
export class ProductListOLRComponent {

  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

}
