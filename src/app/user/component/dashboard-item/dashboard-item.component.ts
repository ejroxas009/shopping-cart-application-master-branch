import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/admin/models/product';


@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input() product : Product | undefined;

 

  constructor() { }

  ngOnInit(): void {
    
  }

}
