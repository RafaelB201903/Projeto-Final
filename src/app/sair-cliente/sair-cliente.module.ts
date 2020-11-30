import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SairClientePageRoutingModule } from './sair-cliente-routing.module';

import { SairClientePage } from './sair-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SairClientePageRoutingModule
  ],
  declarations: [SairClientePage]
})
export class SairClientePageModule {}
