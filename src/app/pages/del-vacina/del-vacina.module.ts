import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelVacinaPageRoutingModule } from './del-vacina-routing.module';

import { DelVacinaPage } from './del-vacina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelVacinaPageRoutingModule
  ],
  declarations: [DelVacinaPage]
})
export class DelVacinaPageModule {}
