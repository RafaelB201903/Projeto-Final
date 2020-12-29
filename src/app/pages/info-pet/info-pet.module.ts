import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPetPageRoutingModule } from './info-pet-routing.module';

import { InfoPetPage } from './info-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InfoPetPageRoutingModule
  ],
  declarations: [InfoPetPage]
})
export class InfoPetPageModule {}
