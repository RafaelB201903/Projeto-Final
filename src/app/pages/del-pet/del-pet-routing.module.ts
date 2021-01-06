import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelPetPage } from './del-pet.page';

const routes: Routes = [
  {
    path: '',
    component: DelPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelPetPageRoutingModule {}
