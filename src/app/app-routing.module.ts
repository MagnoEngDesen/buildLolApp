import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'adc',
    loadChildren: () => import('./builds/adc/adc.module').then( m => m.AdcPageModule)
  },
  {
    path: 'mid',
    loadChildren: () => import('./builds/mid/mid.module').then( m => m.MidPageModule)
  },
  {
    path: 'dados-builds',
    loadChildren: () => import('./dados-builds/dados-builds.module').then( m => m.DadosBuildsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
