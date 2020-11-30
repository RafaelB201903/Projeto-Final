import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SairClientePage } from './sair-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: SairClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SairClientePageRoutingModule {}
