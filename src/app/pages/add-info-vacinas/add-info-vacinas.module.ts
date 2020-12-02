import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInfoVacinasPageRoutingModule } from './add-info-vacinas-routing.module';

import { AddInfoVacinasPage } from './add-info-vacinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInfoVacinasPageRoutingModule
  ],
  declarations: [AddInfoVacinasPage]
})
export class AddInfoVacinasPageModule {}
