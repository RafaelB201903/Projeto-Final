import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMaisPedidosPageRoutingModule } from './ver-mais-pedidos-routing.module';

import { VerMaisPedidosPage } from './ver-mais-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMaisPedidosPageRoutingModule
  ],
  declarations: [VerMaisPedidosPage]
})
export class VerMaisPedidosPageModule {}
