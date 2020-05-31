import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartesbancairePageRoutingModule } from './cartesbancaire-routing.module';

import { CartesbancairePage } from './cartesbancaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartesbancairePageRoutingModule
  ],
  declarations: [CartesbancairePage]
})
export class CartesbancairePageModule {}
