import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perfil2PageRoutingModule } from './perfil2-routing.module';

import { Perfil2Page } from './perfil2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Perfil2PageRoutingModule
  ],
  declarations: [Perfil2Page]
})
export class Perfil2PageModule {}
