import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartesbancairePage } from './cartesbancaire.page';

const routes: Routes = [
  {
    path: '',
    component: CartesbancairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartesbancairePageRoutingModule {}
