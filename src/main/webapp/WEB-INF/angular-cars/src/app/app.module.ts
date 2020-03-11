import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarModelListComponent } from './car-model-list/car-model-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarModelListComponent,
    BrandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }