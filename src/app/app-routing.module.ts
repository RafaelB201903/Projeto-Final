import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const redirectToLogin = () => redirectUnauthorizedTo(['inicial-cliente']);

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
    path: 'dicas-pet',
    loadChildren: () => import('./dicas-pet/dicas-pet.module').then( m => m.DicasPetPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'inicial-cliente',
    loadChildren: () => import('./inicial-cliente/inicial-cliente.module').then( m => m.InicialClientePageModule)
  },
  {
    path: 'sair-cliente',
    loadChildren: () => import('./sair-cliente/sair-cliente.module').then( m => m.SairClientePageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  
  {
    path: 'info-pet/:id',
    loadChildren: () => import('./pages/info-pet/info-pet.module').then( m => m.InfoPetPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'add-info-vacinas/:id',
    loadChildren: () => import('./pages/add-info-vacinas/add-info-vacinas.module').then( m => m.AddInfoVacinasPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'add-info-pet',
    loadChildren: () => import('./add-info-pet/add-info-pet.module').then( m => m.AddInfoPetPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'info-vacinas/:id',
    loadChildren: () => import('./pages/info-vacinas/info-vacinas.module').then( m => m.InfoVacinasPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'gerenciar-pets',
    loadChildren: () => import('./gerenciar-pets/gerenciar-pets.module').then( m => m.GerenciarPetsPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'localizar-petshops',
    loadChildren: () => import('./localizar-petshops/localizar-petshops.module').then( m => m.LocalizarPetshopsPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'agendar-pedido/:id',
    loadChildren: () => import('./agendar-pedido/agendar-pedido.module').then( m => m.AgendarPedidoPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'ver-mais-petshop/:id',
    loadChildren: () => import('./ver-mais-petshop/ver-mais-petshop.module').then( m => m.VerMaisPetshopPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'ver-mais-pedidos/:id',
    loadChildren: () => import('./ver-mais-pedidos/ver-mais-pedidos.module').then( m => m.VerMaisPedidosPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('./cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },
  {
    path: 'add-imagem',
    loadChildren: () => import('./add-imagem/add-imagem.module').then( m => m.AddImagemPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'alt-senha',
    loadChildren: () => import('./alt-senha/alt-senha.module').then( m => m.AltSenhaPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'atualizar-info',
    loadChildren: () => import('./atualizar-info/atualizar-info.module').then( m => m.AtualizarInfoPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'alt-info-pet/:id',
    loadChildren: () => import('./pages/alt-info-pet/alt-info-pet.module').then( m => m.AltInfoPetPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'alt-info-vacinas/:id',
    loadChildren: () => import('./pages/alt-info-vacinas/alt-info-vacinas.module').then( m => m.AltInfoVacinasPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'del-vacina/:id',
    loadChildren: () => import('./pages/del-vacina/del-vacina.module').then( m => m.DelVacinaPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'del-pet/:id',
    loadChildren: () => import('./pages/del-pet/del-pet.module').then( m => m.DelPetPageModule),
    canActivate : [AngularFireAuthGuard],data : {authGuardPipe : redirectToLogin}
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
