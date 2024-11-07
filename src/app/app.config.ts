import { provideRouter, Routes, withRouterConfig } from '@angular/router';
import { TattooComponent } from './tattoo/tattoo.component';
import { importProvidersFrom } from '@angular/core';

export const routes: Routes = [
  { path: '', component: TattooComponent }
];

export const appConfig = {
  providers: [
    provideRouter(routes),
  ]
};
