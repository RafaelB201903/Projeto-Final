import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciarPetsPageRoutingModule } from './gerenciar-pets-routing.module';

import { GerenciarPetsPage } from './gerenciar-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarPetsPageRoutingModule
  ],
  declarations: [GerenciarPetsPage]
})
export class GerenciarPetsPageModule {}
