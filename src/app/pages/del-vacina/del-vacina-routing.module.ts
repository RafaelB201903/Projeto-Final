import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelVacinaPage } from './del-vacina.page';

const routes: Routes = [
  {
    path: '',
    component: DelVacinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelVacinaPageRoutingModule {}
