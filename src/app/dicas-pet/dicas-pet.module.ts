import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicasPetPageRoutingModule } from './dicas-pet-routing.module';

import { DicasPetPage } from './dicas-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicasPetPageRoutingModule
  ],
  declarations: [DicasPetPage]
})
export class DicasPetPageModule {}
