import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicialClientePageRoutingModule } from './inicial-cliente-routing.module';

import { InicialClientePage } from './inicial-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicialClientePageRoutingModule
  ],
  declarations: [InicialClientePage]
})
export class InicialClientePageModule {}
