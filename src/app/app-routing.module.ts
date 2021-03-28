import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/categories/add/add.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DeleteComponent } from './components/categories/delete/delete.component';
import { EditComponent } from './components/categories/edit/edit.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';


const routes: Routes = [
  { path: '', redirectTo: 'categories/1/products', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent, pathMatch: 'full' },
  { path: 'categories/delete', component: DeleteComponent, pathMatch: 'full' },
  { path: 'categories/edit', component: EditComponent, pathMatch: 'full' },
  { path: 'categories/add', component: AddComponent, pathMatch: 'full' },
  { path: 'categories/:id/products', component: ProductsComponent, pathMatch: 'full' },
  { path: 'categories/:id/products/addProduct', component: AddProductComponent, pathMatch: 'full' },
  { path: 'shop-cart', component: ShopCartComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
