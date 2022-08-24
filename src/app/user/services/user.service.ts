import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  productsurl = "http://localhost:3000/products";
  products: Products[] = [];
  public search = new BehaviorSubject<string>("");
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
  return this.http.get<Products[]>(this.productsurl);

  }
}
