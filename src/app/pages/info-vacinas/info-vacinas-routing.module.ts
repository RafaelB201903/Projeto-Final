import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoVacinasPage } from './info-vacinas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoVacinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoVacinasPageRoutingModule {}
