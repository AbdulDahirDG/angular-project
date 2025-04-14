import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductPanelService, Product } from './product-panel.service';
import { WritableSignal } from '@angular/core';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop"
import { DestroyRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type UpdateFunc = (val: number) => number;

@Component({
  selector: 'app-product-panel',
  imports: [ProductComponent],
  templateUrl: './product-panel.component.html',
  styleUrl: './product-panel.component.css',
  standalone: true,
})
export class ProductPanelComponent implements OnInit {

  @Input({required: true}) priceVal!: WritableSignal<number>;
  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  apiData: Product[] = [];
  productPanelService = inject(ProductPanelService)
  destroyRef = inject(DestroyRef)

  // constructor (private productPanelService: ProductPanelService) {}

  getData() {
    this.productPanelService.getProductsHttpClient().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((products) => {
      this.apiData = products})
  }

  ngOnInit() {
    this.getData()
  }


}
