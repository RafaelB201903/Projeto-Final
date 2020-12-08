import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltInfoPetPage } from './alt-info-pet.page';

const routes: Routes = [
  {
    path: '',
    component: AltInfoPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltInfoPetPageRoutingModule {}
