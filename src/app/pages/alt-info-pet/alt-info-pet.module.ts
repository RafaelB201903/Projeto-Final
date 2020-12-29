import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltInfoPetPageRoutingModule } from './alt-info-pet-routing.module';

import { AltInfoPetPage } from './alt-info-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AltInfoPetPageRoutingModule
  ],
  declarations: [AltInfoPetPage]
})
export class AltInfoPetPageModule {}
