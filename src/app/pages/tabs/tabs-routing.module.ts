import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


  const routes: Routes = [
    {
      path: '',
      component: TabsPage,
      children: [
        {
            path: 'info-pet/:id',
            children: [
              {
                path: '',
                loadChildren: () => import('../info-pet/info-pet.module').then(m => m.InfoPetPageModule)
              }
            ]
        },
        {
          path: 'info-vacinas',
          children: [
            {
              path: '',
              loadChildren: () => import('../info-vacinas/info-vacinas.module').then(m => m.InfoVacinasPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/tabs/info-pet',
          pathMatch: 'full'
        } 
      ]
    },
    {
      path: '',
      redirectTo: '/info-pet',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
