import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import {RegisterComponent} from "./register/register.component";

import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { VolsComponent } from './vols/vols.component';
import { AccountComponent } from './account/account.component';
import { AirportsComponent } from './airports/airports.component';
import { FlynumberComponent } from './flynumber/flynumber.component';
import { DestinationComponent } from './destination/destination.component';
import { ParamComponent } from './param/param.component';
import { BilletComponent } from './billet/billet.component';



const routes: Routes = [
  
 
  {path : '', component: HomePageComponent},
  {path : 'login',    component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'research', component : ResearchComponent},
  {path : 'vols', component : VolsComponent},
  {path : 'account' , component :AccountComponent},
  {path : 'airports' , component : AirportsComponent},
  {path : 'flynumber' ,component : FlynumberComponent},
  {path : 'destination',component : DestinationComponent},
  {path : 'param' ,component: ParamComponent},
  {path : 'billet' , component : BilletComponent},  {
    path: 'cartesbancaire',
    loadChildren: () => import('./cartesbancaire/cartesbancaire.module').then( m => m.CartesbancairePageModule)
  },
  {
    path: 'ajoutcb',
    loadChildren: () => import('./ajoutcb/ajoutcb.module').then( m => m.AjoutcbPageModule)
  },
  {
    path: 'notif',
    loadChildren: () => import('./notif/notif.module').then( m => m.NotifPageModule)
  },
  {
    path: 'addcb',
    loadChildren: () => import('./addcb/addcb.module').then( m => m.AddcbPageModule)
  }

 
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

