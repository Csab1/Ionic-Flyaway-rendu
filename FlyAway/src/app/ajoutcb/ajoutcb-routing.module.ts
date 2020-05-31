import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutcbPage } from './ajoutcb.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutcbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutcbPageRoutingModule {}
