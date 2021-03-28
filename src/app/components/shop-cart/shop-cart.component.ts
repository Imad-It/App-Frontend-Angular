import { ShopCartService } from './../../services/shop-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor(public shopCartService: ShopCartService) { }

  ngOnInit(): void {
  }

}

