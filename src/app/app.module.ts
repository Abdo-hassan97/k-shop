import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavAndSearchComponent } from './components/nav-and-search/nav-and-search.component';
import { SliderComponent } from './components/slider/slider.component';
import { AsideComponent } from './components/aside/aside.component';
import { BodyComponent } from './components/body/body.component';
import { HopesComponent } from './components/hopes/hopes.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAndSearchComponent,
    SliderComponent,
    AsideComponent,
    BodyComponent,
    HopesComponent,
    ContactUsComponent,
    InfoComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
