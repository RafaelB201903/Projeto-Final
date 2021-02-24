import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddImagemPetPage } from './add-imagem-pet.page';

const routes: Routes = [
  {
    path: '',
    component: AddImagemPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddImagemPetPageRoutingModule {}
