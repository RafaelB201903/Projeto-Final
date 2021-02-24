import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddImagemPetPageRoutingModule } from './add-imagem-pet-routing.module';

import { AddImagemPetPage } from './add-imagem-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddImagemPetPageRoutingModule
  ],
  declarations: [AddImagemPetPage]
})
export class AddImagemPetPageModule {}
