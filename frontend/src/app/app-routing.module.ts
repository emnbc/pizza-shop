import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsAuthGuard } from './guards/is-auth.guard';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';
import { CheckAuthGuard } from './guards/check-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canLoad: [CheckAuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
    canLoad: [CheckAuthGuard]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule),
    canLoad: [CheckAuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canLoad: [IsAuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
    canLoad: [CheckAuthGuard]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule),
    canLoad: [IsNotAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
