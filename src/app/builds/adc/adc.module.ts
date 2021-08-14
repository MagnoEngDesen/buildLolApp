import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcPageRoutingModule } from './adc-routing.module';

import { AdcPage } from './adc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcPageRoutingModule
  ],
  declarations: [AdcPage]
})
export class AdcPageModule {}
