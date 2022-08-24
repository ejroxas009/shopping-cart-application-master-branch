import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
