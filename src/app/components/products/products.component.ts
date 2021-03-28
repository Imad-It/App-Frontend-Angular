import { Observable } from 'rxjs';
import { CatService } from './../../services/cat.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  currentCatId: string;
  products$: Observable<Product[]> = null;
  product: Product = null;
  p: number = 1;
  productName: string;

  constructor(private catService: CatService, private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentCatId = this.route.snapshot.paramMap.get("id");
        this.products$ = this.catService.getProducts(this.currentCatId);
      }
    });
  }


  ngOnInit(): void { console.log('######init') };

  catchProduct(e) {
    this.productName = e.name;
    this.product = e;
  }

  deleteProduct() {
    let idCat = this.route.snapshot.paramMap.get("id");
    this.catService.deleteProduct(idCat, this.product.id).subscribe(
      () => {
        this.router.navigateByUrl('/categories/' + idCat + '/products?ts=' + Date.now());
      });
  }

  editProduct() {
    this.router.navigateByUrl('/categories/' + this.currentCatId + '/products/addProduct');
  }

}



