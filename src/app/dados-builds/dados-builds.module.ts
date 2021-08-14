import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosBuildsPageRoutingModule } from './dados-builds-routing.module';

import { DadosBuildsPage } from './dados-builds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosBuildsPageRoutingModule
  ],
  declarations: [DadosBuildsPage]
})
export class DadosBuildsPageModule {}
