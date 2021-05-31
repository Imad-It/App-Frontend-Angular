import { CatService } from './../../services/cat.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] | null = null;
  p: number = 1;
  constructor(private catService: CatService, private router: Router) { }

  ngOnInit(): void {
    this.catService.getCategories().subscribe(data => { this.categories = data; }
    );
  }

  addCategory() {
    this.router.navigateByUrl('categories/add');
  }

  pass(category: Category) {
    this.router.navigateByUrl('categories/edit', { state: category });
  }

  submit(category: Category) {
    this.router.navigateByUrl('categories/delete', { state: category });
  }
  trackById(index, category: Category): number {
    return category.id;
  }

}

