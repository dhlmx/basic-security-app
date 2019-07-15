import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
