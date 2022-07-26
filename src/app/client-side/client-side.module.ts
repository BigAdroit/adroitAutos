import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CarsComponent } from './pages/cars/cars.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    ClientSideComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    CarsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    SharedModule
  ]
})
export class ClientSideModule { }
