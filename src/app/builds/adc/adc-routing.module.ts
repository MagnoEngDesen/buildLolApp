import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcPage } from './adc.page';

const routes: Routes = [
  {
    path: '',
    component: AdcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcPageRoutingModule {}
