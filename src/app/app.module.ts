import { DadosService } from './services/dados.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
 //Os DadosService estiver dentro de providers, toda que que a aplicação fizar um start o dodos service vai carrega juntos//
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DadosService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
