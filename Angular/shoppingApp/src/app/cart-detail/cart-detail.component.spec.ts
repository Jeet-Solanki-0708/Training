import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CartDetailComponent } from './cart-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CartService } from '../service/cartService';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from '../shopping-list/shopping-list-service';


describe('CartDetailComponent', () => {
  let component: CartDetailComponent;

  let location:Location;
  let router:Router;
  let fixture;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([    
        {path:'',redirectTo:'/shoppingList',pathMatch:'full'},
        {path:'shoppingList',component:ShoppingListComponent},
        {path:'details/:productId',component:ProductDetailComponent},
        {path:'cart',component:CartDetailComponent}    
           ])],
         providers:[{provide:CartService,useClass:CartService},
          {provide:ShoppingListService,useClass:ShoppingListService}
        ],
         declarations: [
          AppComponent,
          ShoppingListComponent,
          ProductDetailComponent,
          CartDetailComponent,
          HeaderComponent
        ],
       });

       router=TestBed.get(Router);
       location=TestBed.get(Location);
       fixture=TestBed.createComponent(AppComponent);
       router.initialNavigation();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(CartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.navigate(['cart']);
  });

  it('should create Cart Detail', fakeAsync (() => {
    tick();
    expect(location.path()).toBe('/cart');
  }));

});
