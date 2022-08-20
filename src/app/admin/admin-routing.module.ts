import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductComponent } from './pages/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';

const routes : Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: "product",
    component: ProductComponent,
    canActivate: [AuthGuard, RoleGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
