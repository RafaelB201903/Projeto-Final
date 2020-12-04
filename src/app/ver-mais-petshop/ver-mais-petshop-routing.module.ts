import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMaisPetshopPage } from './ver-mais-petshop.page';

const routes: Routes = [
  {
    path: '',
    component: VerMaisPetshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMaisPetshopPageRoutingModule {}
