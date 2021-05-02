import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { AddCartRequest, CartData } from './model/Cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  totalPrice: number = 0.00;
  private productList = [];
  private cartDataList: CartData[] = [];
  private cartRequest: AddCartRequest = {
    productId: 0,
    cartons: 0,
    units: 0
  };

  private total: 0;
  constructor(private _shoppingService: ShoppingService) { }

  ngOnInit() {
    this._shoppingService.getProductData()
      .subscribe(res => this.productList.push(...res.data));

    this.getCartDat();
  }


  addToCart(id: number, cartoons: number, units: number) {
    if (cartoons > 0 || units > 0) {
      this.cartRequest.productId = id;
      this.cartRequest.cartons = cartoons;
      this.cartRequest.units = units;

      this._shoppingService.addCartData(this.cartRequest)
        .subscribe(res => {
          this.getCartDat();
        });
    }
  }

  getCartDat() {
    this._shoppingService.getCartData()
      .subscribe(res => {
        this.cartDataList = res.data;
        this.totalPrice = 0.00;
        this.cartDataList.forEach(element => {
          this.totalPrice += element.totalPrice;
        });
      });
  }

  removeProductFromCart(id: number){
    this._shoppingService.removeProductFromCart(id)
      .subscribe(res =>{
        this.getCartDat();
      });
  }

}
