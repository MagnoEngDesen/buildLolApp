import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MidPageRoutingModule } from './mid-routing.module';

import { MidPage } from './mid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MidPageRoutingModule
  ],
  declarations: [MidPage]
})
export class MidPageModule {}
