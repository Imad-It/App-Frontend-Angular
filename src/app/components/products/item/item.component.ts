
import { ShopCartService } from './../../../services/shop-cart.service';
import { CartItem } from './../../../models/cartItem';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { CatService } from 'src/app/services/cat.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input() product: Product;
  @Output() outProduct = new EventEmitter<Product>();
  category: any;

  cartItem: CartItem = null;


  constructor(public catService: CatService, private shpoCartService: ShopCartService) { }

  ngOnInit(): void { this.product.qty = 1; }


  emitProduct(product: Product) {
    this.outProduct.emit(product);
  }

  addToCart(product: Product) {
    if (!this.itemInCart(product)) {
      this.cartItem = { id: product.id, title: product.name, price: (product.price * product.qty), qty: product.qty };
      this.shpoCartService.cartItems.push(this.cartItem);
    }
    let tol: number = 0;
    for (let item of this.shpoCartService.cartItems) {
      tol += (item.price * item.qty);
    }
    this.shpoCartService.total = tol;
  }

  itemInCart(product: Product): boolean {
    if (this.shpoCartService.cartItems) {
      for (let item of this.shpoCartService.cartItems) {
        if (item.id === product.id) {
          item.qty += product.qty;
          item.price += (product.price * product.qty);
          return true;
        }
      }
    }
    return false;
  }
}

