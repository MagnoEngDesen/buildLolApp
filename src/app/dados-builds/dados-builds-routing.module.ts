import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosBuildsPage } from './dados-builds.page';

const routes: Routes = [
  {
    path: '',
    component: DadosBuildsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosBuildsPageRoutingModule {}
