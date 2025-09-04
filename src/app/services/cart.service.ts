import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { cartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
}) 
export class CartService {
  private cart: Cart = new Cart();

  addTocart(food:Foods) : void{
    let existingCartItem = this.cart.items.find(item => item.food.id === food.id)

    if(existingCartItem){
      this.changequantity(food.id , existingCartItem.quantity +1);
      return;
    }
    this.cart.items.push(new cartItem(food));
  }
  removFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id !=foodId)
  }
  changequantity(quantity:number , food:number){
    let cartItem = this.cart.items.find(item => item.food.id === food);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart
  }
}
