import { Injectable, AfterViewInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  barcode: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductPanelService {

  getProducts(): Promise<Product[]> {
    let products = fetch("http://localhost:3000/products").then((prods) => prods.json())
    return products
  }

}
