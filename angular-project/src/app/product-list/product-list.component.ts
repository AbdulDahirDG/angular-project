import { Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>
  
}
