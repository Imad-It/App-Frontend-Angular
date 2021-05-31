import { Router, ActivatedRoute } from '@angular/router';
import { ShopCartService } from './../../../services/shop-cart.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(public catService: CatService,
    private shpoCartService: ShopCartService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void { this.product.qty = 1; }


  emitProduct(product: Product) {
    this.outProduct.emit(product);
  }

  addToCart(product: Product) {
    if (!this.itemInCart(product)) {
      this.shpoCartService.products.push(product);
    }
    let sum: number = 0;
    for (let item of this.shpoCartService.products) {
      sum += (item.price * item.qty);
    }
    this.shpoCartService.total = sum;
  }

  itemInCart(product: Product): boolean {
    if (this.shpoCartService.products) {
      for (let item of this.shpoCartService.products) {
        if (item.id === product.id) {
          item.qty += product.qty;
          return true;
        }
      }
    }
    return false;
  }

  editProduct(product: Product) {
    let idCat = this.route.snapshot.paramMap.get("id");
    this.router.navigateByUrl(`categories/${idCat}/products/editProduct`, { state: product });
  }
}

