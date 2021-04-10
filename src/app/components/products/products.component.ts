import { Observable } from 'rxjs';
import { CatService } from './../../services/cat.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  itemsPerPage: number = 6;

  constructor(private catService: CatService, private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentCatId = this.route.snapshot.paramMap.get("id");
        this.products$ = this.catService.getProducts(this.currentCatId);
      }
    });
  }


  ngOnInit(): void { };

  onChange(event) {
    this.itemsPerPage = event.target.value;
    this.p = 1;
  }

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
    this.p = 1;
  }

  editProduct() {
    this.router.navigateByUrl('/categories/' + this.currentCatId + '/products/addProduct');
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value.keyword);
    this.products$ = this.catService.searchProduct(form.value.keyword);
    this.p = 1;
  }

}



