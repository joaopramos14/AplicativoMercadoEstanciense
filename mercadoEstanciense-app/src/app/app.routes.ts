import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./pages/carrinho/carrinho.page').then( m => m.CarrinhoPage)
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/produtos/produtos.page').then( m => m.ProdutosPage)
  },
];
