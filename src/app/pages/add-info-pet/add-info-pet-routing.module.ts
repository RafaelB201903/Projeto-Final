import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInfoPetPage } from './add-info-pet.page';

const routes: Routes = [
  {
    path: '',
    component: AddInfoPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInfoPetPageRoutingModule {}
