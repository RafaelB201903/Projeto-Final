import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltInfoPetPageRoutingModule } from './alt-info-pet-routing.module';

import { AltInfoPetPage } from './alt-info-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltInfoPetPageRoutingModule
  ],
  declarations: [AltInfoPetPage]
})
export class AltInfoPetPageModule {}
