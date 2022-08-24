import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Order } from '../models/order';
=======
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Products } from '../models/products';
>>>>>>> master

@Injectable({
  providedIn: 'root'
})
export class UserService {
  productsurl = "http://localhost:3000/products";
  products: Products[] = [];
  public search = new BehaviorSubject<string>("");
  
  

<<<<<<< HEAD
  constructor(private http : HttpClient) { }

getCheckOutData(){
  return this.http.get("http://localhost:3000/checkouts/1")
}

getPendingOrder(){
  return this.http.get("http://localhost:3000/pendingOrders/1")
}

placeOrder(order : Order[]){
  
  return this.http.put ("http://localhost:3000/pendingOrders/1", {pendingOrders : order })
}

deleteCheckout(){
  return this.http.delete("http://localhost:3000/checkouts/1")
}
=======
  getProducts(): Observable<Products[]> {
  return this.http.get<Products[]>(this.productsurl);

  }
>>>>>>> master
}
