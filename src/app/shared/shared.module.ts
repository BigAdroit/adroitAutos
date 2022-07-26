import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientFooterComponent } from './client-footer/client-footer.component';



@NgModule({
  declarations: [
    ClientHeaderComponent,
    ClientFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    ClientFooterComponent,
    ClientHeaderComponent
  ]
})
export class SharedModule { }
