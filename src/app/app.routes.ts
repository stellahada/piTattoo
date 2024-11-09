import { NgModule } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TattooComponent } from './tattoo/tattoo.component';
export const routes: Routes = [
    { path: 'about', component: TattooComponent },
    { path: 'login', component: LoginComponent },
];
