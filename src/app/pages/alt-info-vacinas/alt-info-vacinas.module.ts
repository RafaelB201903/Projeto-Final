import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltInfoVacinasPageRoutingModule } from './alt-info-vacinas-routing.module';

import { AltInfoVacinasPage } from './alt-info-vacinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltInfoVacinasPageRoutingModule
  ],
  declarations: [AltInfoVacinasPage]
})
export class AltInfoVacinasPageModule {}
