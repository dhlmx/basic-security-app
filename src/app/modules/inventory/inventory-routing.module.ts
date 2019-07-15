import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { InventoryCategoriesComponent } from './inventory-categories/inventory-categories.component';
import { InventoryProductsComponent } from './inventory-products/inventory-products.component';

const routes: Routes = [
  { path: '', component: InventoryComponent, children: [
      { path: '', redirectTo: '/inventory/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: InventoryDashboardComponent },
      { path: 'categories', component: InventoryCategoriesComponent },
      { path: 'products', component: InventoryProductsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
