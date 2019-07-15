import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: 'inventory', loadChildren: './modules/inventory/inventory.module#InventoryModule' },
  { path: 'pos', loadChildren: './modules/pos/pos.module#PosModule' },
  { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
