import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoEmAndamentoPage } from './pedido-em-andamento.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoEmAndamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoEmAndamentoPageRoutingModule {}
