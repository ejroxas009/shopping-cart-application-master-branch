import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminItemComponent } from './components/admin-item/admin-item.component';
import { AdminDashboardItemComponent } from './components/admin-dashboard-item/admin-dashboard-item.component';
import { ProductItemComponent } from './components/product-item/product-item.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductComponent,
    AdminComponent,
    AdminItemComponent,
    AdminDashboardItemComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
