import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInfoPetPageRoutingModule } from './add-info-pet-routing.module';

import { AddInfoPetPage } from './add-info-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddInfoPetPageRoutingModule
  ],
  declarations: [AddInfoPetPage]
})
export class AddInfoPetPageModule {}
