import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltInfoVacinasPage } from './alt-info-vacinas.page';

const routes: Routes = [
  {
    path: '',
    component: AltInfoVacinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltInfoVacinasPageRoutingModule {}
