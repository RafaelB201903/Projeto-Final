import { AltInfoPetPageModule } from './../alt-info-pet/alt-info-pet.module';
import { AltInfoPetPage } from './../alt-info-pet/alt-info-pet.page';
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
          path: 'alt-info-pet/:id',
          children: [
            {
              path: '',
              loadChildren: () => import('../alt-info-pet/alt-info-pet.module').then(m => m.AltInfoPetPageModule)
            }
          ]
        },
        {
          path: 'info-vacinas/:id',
          children: [
            {
              path: '',
              loadChildren: () => import('../info-vacinas/info-vacinas.module').then(m => m.InfoVacinasPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/tabs/info-pet/:id',
          pathMatch: 'full'
        } 
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
