import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMaisPetshopPageRoutingModule } from './ver-mais-petshop-routing.module';

import { VerMaisPetshopPage } from './ver-mais-petshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMaisPetshopPageRoutingModule
  ],
  declarations: [VerMaisPetshopPage]
})
export class VerMaisPetshopPageModule {}
