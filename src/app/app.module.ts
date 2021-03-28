import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddComponent } from './components/categories/add/add.component';
import { EditComponent } from './components/categories/edit/edit.component';
import { DeleteComponent } from './components/categories/delete/delete.component';
import { ProductsComponent } from './components/products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ItemComponent } from './components/products/item/item.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/products/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AddComponent,
    EditComponent,
    AddProductComponent,
    DeleteComponent,
    ProductsComponent,
    ItemComponent,
    ShopCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
