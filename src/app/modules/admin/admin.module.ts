import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { AdminInventoryComponent } from './admin-inventory/admin-inventory.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminInventoryComponent,
    AdminUsersComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
