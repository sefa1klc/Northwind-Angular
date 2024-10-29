import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {ProductAddComponent} from "./components/product-add/product-add.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {path : "",pathMatch :"full" ,component :ProductComponent},
  {path : "products", component :ProductComponent},
  {path : "products/category/:categoryID", component :ProductComponent},
  {path : "products/add", component :ProductAddComponent, canActivate: [LoginGuard]},
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
