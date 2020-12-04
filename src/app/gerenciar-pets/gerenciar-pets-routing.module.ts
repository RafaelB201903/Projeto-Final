import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciarPetsPage } from './gerenciar-pets.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciarPetsPageRoutingModule {}
