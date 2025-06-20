import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductOLRComponent } from '../product-olr/product-olr.component';
import { ProductPanelService, Product } from './product-panel.service';
import { WritableSignal } from '@angular/core';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop"
import { DestroyRef } from '@angular/core';

export type UpdateFunc = (val: number) => number;

@Component({
  selector: 'app-product-panel',
  imports: [ProductOLRComponent],
  templateUrl: './product-panel.component.html',
  styleUrl: './product-panel.component.css',
  standalone: true,
})
export class ProductPanelComponent implements OnInit {

  @Input({required: true}) total!: WritableSignal<number>;
  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  apiData: Product[] = [];
  productPanelService = inject(ProductPanelService)
  destroyRef = inject(DestroyRef)

  getData() {
    this.productPanelService.getProductsHttpClient().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((products) => {
      this.apiData = products})
  }

  ngOnInit() {
    this.getData()
  }


}
