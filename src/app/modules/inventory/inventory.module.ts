import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { InventoryProductsComponent } from './inventory-products/inventory-products.component';
import { InventoryCategoriesComponent } from './inventory-categories/inventory-categories.component';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryCategoriesComponent,
    InventoryDashboardComponent,
    InventoryProductsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
