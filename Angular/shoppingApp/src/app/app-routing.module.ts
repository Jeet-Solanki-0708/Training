import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

export const routes: Routes = [
  {path:'',redirectTo:'/shoppingList',pathMatch:'full'},
  {path:'shoppingList',component:ShoppingListComponent},
  {path:'details/:productId',component:ProductDetailComponent},
  {path:'cart',component:CartDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
