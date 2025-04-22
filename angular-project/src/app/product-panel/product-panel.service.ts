import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  barcode: string;
  price: number;
}

interface Basket {
    itemList: Item[],
    total: number
}

interface Item {
  name: string, count: number
}

@Injectable({providedIn: "root"})
export class ProductPanelService {

  constructor( private httpClient: HttpClient ){}

  getProducts(): Promise<Product[]> {
    return fetch("http://localhost:3000/products").then((prods) => prods.json())
  }

  getProductsHttpClient() {
    return this.httpClient.get<Product[]>("http://localhost:3000/products").pipe(map((results: Product[]) => results))
  }  

}
