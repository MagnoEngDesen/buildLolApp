import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidPage } from './mid.page';

const routes: Routes = [
  {
    path: '',
    component: MidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MidPageRoutingModule {}
