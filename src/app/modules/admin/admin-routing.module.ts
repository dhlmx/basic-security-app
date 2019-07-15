import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminInventoryComponent } from './admin-inventory/admin-inventory.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'inventory', component: AdminInventoryComponent },
      { path: 'users', component: AdminUsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
