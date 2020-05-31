import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutcbPageRoutingModule } from './ajoutcb-routing.module';

import { AjoutcbPage } from './ajoutcb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutcbPageRoutingModule
  ],
  declarations: [AjoutcbPage]
})
export class AjoutcbPageModule {}
