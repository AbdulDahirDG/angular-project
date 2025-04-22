import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product-panel/product-panel.service';

@Injectable({
  providedIn: 'root'
})
export class BasketOLRService {

  constructor( private httpClient: HttpClient ) { }

  getBasket(){
    return this.httpClient.get("http://localhost:3000/basket")
  }

  postBasket(basketList: Product[]){
    return this.httpClient.patch("http://localhost:3000/basket", basketList)
  }


}
