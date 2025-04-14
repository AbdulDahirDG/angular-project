import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
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

interface DbData {
  products: Product[],
  basket: Basket
}

@Injectable({providedIn: "root"})
export class ProductPanelService {

  constructor( private httpClient: HttpClient ){}

  getProducts(): Promise<Product[]> {
    let products = fetch("http://localhost:3000/products").then((prods) => prods.json())
    return products
  }

  getProductsHttpClient() {
    return this.httpClient.get<Product[]>("http://localhost:3000/products").pipe(map((results: Product[]) => results))
  }
  

}
