import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicasPetPage } from './dicas-pet.page';

const routes: Routes = [
  {
    path: '',
    component: DicasPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicasPetPageRoutingModule {}
