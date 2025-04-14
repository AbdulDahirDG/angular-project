import { Component, Input, signal, WritableSignal } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-product-list',
  imports: [MatListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>
  
}
