import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarPedidoPage } from './agendar-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarPedidoPageRoutingModule {}
