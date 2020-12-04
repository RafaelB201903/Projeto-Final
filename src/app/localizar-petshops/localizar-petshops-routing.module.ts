import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizarPetshopsPage } from './localizar-petshops.page';

const routes: Routes = [
  {
    path: '',
    component: LocalizarPetshopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalizarPetshopsPageRoutingModule {}
