import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoVacinasPageRoutingModule } from './info-vacinas-routing.module';

import { InfoVacinasPage } from './info-vacinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoVacinasPageRoutingModule
  ],
  declarations: [InfoVacinasPage]
})
export class InfoVacinasPageModule {}
