import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicialClientePage } from './inicial-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: InicialClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicialClientePageRoutingModule {}
