import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private adminService : AdminService) { }
  public products : Product[] = []
  ngOnInit(): void {
    this.adminService.getProducts().subscribe((data) => {
      this.products = data
      console.log(this.products)
    
    })
    
    
  }

  
}
