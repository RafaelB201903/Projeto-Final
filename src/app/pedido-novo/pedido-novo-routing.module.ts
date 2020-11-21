import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoNovoPage } from './pedido-novo.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoNovoPageRoutingModule {}
