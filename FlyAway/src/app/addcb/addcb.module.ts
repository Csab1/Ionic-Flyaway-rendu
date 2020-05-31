import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcbPageRoutingModule } from './addcb-routing.module';

import { AddcbPage } from './addcb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcbPageRoutingModule
  ],
  declarations: [AddcbPage]
})
export class AddcbPageModule {}
