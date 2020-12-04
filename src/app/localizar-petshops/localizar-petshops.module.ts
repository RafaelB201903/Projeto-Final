import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalizarPetshopsPageRoutingModule } from './localizar-petshops-routing.module';

import { LocalizarPetshopsPage } from './localizar-petshops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizarPetshopsPageRoutingModule
  ],
  declarations: [LocalizarPetshopsPage]
})
export class LocalizarPetshopsPageModule {}
