import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoEmAndamentoPageRoutingModule } from './pedido-em-andamento-routing.module';

import { PedidoEmAndamentoPage } from './pedido-em-andamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoEmAndamentoPageRoutingModule
  ],
  declarations: [PedidoEmAndamentoPage]
})
export class PedidoEmAndamentoPageModule {}
