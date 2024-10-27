
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'associate', loadComponent: () => import('./component/associatelisting/associatelisting.component').then(m => m.AssociatelistingComponent) },
    { path: 'customer', loadComponent: () => import('./component/customer/customer.component').then(m => m.CustomerComponent) },
    { path: 'blog', loadComponent: () => import('./component/bloglisting/bloglisting.component').then(m => m.BloglistingComponent) },
];
