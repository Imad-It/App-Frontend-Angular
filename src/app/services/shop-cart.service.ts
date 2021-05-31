import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  products: Product[] = [];
  total: number = 0;
  constructor() { }
}

