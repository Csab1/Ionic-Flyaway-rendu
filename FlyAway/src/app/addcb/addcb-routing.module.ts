import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcbPage } from './addcb.page';

const routes: Routes = [
  {
    path: '',
    component: AddcbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcbPageRoutingModule {}
