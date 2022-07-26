import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideComponent } from './client-side.component';
import { AboutComponent } from './pages/about/about.component';
import { CarsComponent } from './pages/cars/cars.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes: Routes = [{ path: '', component: ClientSideComponent, 
  children: [
      {path : "", component : HomeComponent},
      {path: "about", component : AboutComponent},
      {path: "pricing", component : PricingComponent},
      {path: "contact", component : ContactComponent},
      {path: "car", component : CarsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
