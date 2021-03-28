import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  cartItems: CartItem[] = [];
  total: number = 0;
  constructor() { }
}

