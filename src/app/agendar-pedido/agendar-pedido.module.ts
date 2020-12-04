import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarPedidoPageRoutingModule } from './agendar-pedido-routing.module';

import { AgendarPedidoPage } from './agendar-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarPedidoPageRoutingModule
  ],
  declarations: [AgendarPedidoPage]
})
export class AgendarPedidoPageModule {}
