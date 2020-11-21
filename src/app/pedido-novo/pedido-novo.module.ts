import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoNovoPageRoutingModule } from './pedido-novo-routing.module';

import { PedidoNovoPage } from './pedido-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoNovoPageRoutingModule
  ],
  declarations: [PedidoNovoPage]
})
export class PedidoNovoPageModule {}
