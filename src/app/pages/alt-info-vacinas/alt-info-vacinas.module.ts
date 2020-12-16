import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltInfoVacinasPageRoutingModule } from './alt-info-vacinas-routing.module';

import { AltInfoVacinasPage } from './alt-info-vacinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AltInfoVacinasPageRoutingModule
  ],
  declarations: [AltInfoVacinasPage]
})
export class AltInfoVacinasPageModule {}
