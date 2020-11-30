import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicial-cliente',
    pathMatch: 'full'
  },
  {
    path: 'login-cliente',
    loadChildren: () => import('./login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('./cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },
  {
    path: 'home-cliente',
    loadChildren: () => import('./home-cliente/home-cliente.module').then( m => m.HomeClientePageModule),
  
  },
  {
    path: 'pedido-novo',
    loadChildren: () => import('./pedido-novo/pedido-novo.module').then( m => m.PedidoNovoPageModule)
  },
  {
    path: 'pedido-em-andamento',
    loadChildren: () => import('./pedido-em-andamento/pedido-em-andamento.module').then( m => m.PedidoEmAndamentoPageModule)
  },
  {
    path: 'pedidos-finalizados',
    loadChildren: () => import('./pedidos-finalizados/pedidos-finalizados.module').then( m => m.PedidosFinalizadosPageModule)
  },
  {
    path: 'vacinacao',
    loadChildren: () => import('./vacinacao/vacinacao.module').then( m => m.VacinacaoPageModule)
  },
  {
    path: 'dicas-pet',
    loadChildren: () => import('./dicas-pet/dicas-pet.module').then( m => m.DicasPetPageModule)
  },
  {
    path: 'inicial-cliente',
    loadChildren: () => import('./inicial-cliente/inicial-cliente.module').then( m => m.InicialClientePageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'sair-cliente',
    loadChildren: () => import('./sair-cliente/sair-cliente.module').then( m => m.SairClientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
