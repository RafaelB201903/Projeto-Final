import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInfoVacinasPage } from './add-info-vacinas.page';

const routes: Routes = [
  {
    path: '',
    component: AddInfoVacinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInfoVacinasPageRoutingModule {}
