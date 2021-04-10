import { ShopCartService } from './services/shop-cart.service';

import { CatService } from './services/cat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';
  categories?: Category[] = null;
  currentCatId: number;

  constructor(public catService: CatService, private router: Router, public shopCartService: ShopCartService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.catService.getCategories().subscribe((data) => {
          this.categories = data;
        });
      }
    });
  }

  ngOnInit(): void {

  }

  select(category: Category) {
    this.catService.currentCatId = category.id;
    this.router.navigateByUrl('/categories/' + category.id + '/products');
  }
}
