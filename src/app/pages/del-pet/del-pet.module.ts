import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelPetPageRoutingModule } from './del-pet-routing.module';

import { DelPetPage } from './del-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelPetPageRoutingModule
  ],
  declarations: [DelPetPage]
})
export class DelPetPageModule {}
