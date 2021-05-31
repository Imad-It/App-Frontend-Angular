import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/categories/add/add.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DeleteComponent } from './components/categories/delete/delete.component';
import { EditComponent } from './components/categories/edit/edit.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';


const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/delete', component: DeleteComponent },
  { path: 'categories/edit', component: EditComponent },
  { path: 'categories/add', component: AddComponent },
  { path: 'categories/:id/products', component: ProductsComponent },
  { path: 'categories/:id/products/addProduct', component: AddProductComponent },
  { path: 'categories/:id/products/editProduct', component: EditProductComponent },
  { path: 'shop-cart', component: ShopCartComponent },
  { path: '', redirectTo: 'categories/1/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
