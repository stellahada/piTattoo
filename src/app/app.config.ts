import { provideRouter, Routes, withRouterConfig } from '@angular/router';
import { TattooComponent } from './tattoo/tattoo.component';
import { importProvidersFrom } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: TattooComponent },
  { path: 'login', component: LoginComponent },
];

export const appConfig = {
  providers: [
    provideRouter(routes),
    
  ]
};
