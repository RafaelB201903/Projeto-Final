import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMaisPedidosPage } from './ver-mais-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: VerMaisPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMaisPedidosPageRoutingModule {}
