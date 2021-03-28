import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class CatService implements OnInit {

  host: string = "http://localhost:8080/categories/";
  currentCatId: number = 1;
  currentCategory: Category;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.host);
  }

  public saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.host, category);
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.host + category.id, category);
  }

  public deleteCategory(id: number) {
    return this.http.delete(`${this.host}${id}`);
  }

  public getProducts(id: any): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + id + '/products');
  }

  public deleteProduct(idCat: any, idPro: number) {
    return this.http.delete(this.host + idCat + '/products/' + idPro);
  }


  saveProduct(file: File, product: Product) {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('name', product.name);
    formdata.append('desc', product.description);
    formdata.append('price', stringify(product.price));

    const req = new HttpRequest('POST', this.host + this.currentCatId + '/products', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);

  }
}

