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
    path: 'sair-cliente',
    loadChildren: () => import('./sair-cliente/sair-cliente.module').then( m => m.SairClientePageModule)
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
