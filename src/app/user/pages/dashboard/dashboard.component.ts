import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { UserService } from '../../services/user.service';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public products: Products[] = [];
  searchKey: string = "";
  brand = '';
  SearchBrand: string = '';
  SortbyParam = '';
  SortDirection = 'asc';

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
    {text: "Two", cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: 'black'},
  ];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllProducts();

    this.userService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  getAllProducts() {
    this.userService.getProducts().subscribe(products => {
      this.products = products
      console.log(this.products);
    });
  }
  

  onBrandFilter() {
    this.SearchBrand = this.brand;
  }

  onBrandFilterClear() {
    this.SearchBrand = '';
    this.brand = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
