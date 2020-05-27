import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import {RegisterComponent} from "./register/register.component";

import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { VolsComponent } from './vols/vols.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  
 
  {path : '', component: HomePageComponent},
  {path : 'login',    component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'research', component : ResearchComponent},
  {path : 'vols', component : VolsComponent},
  {path : 'account' , component :AccountComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
