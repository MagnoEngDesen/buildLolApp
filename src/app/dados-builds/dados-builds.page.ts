import { IBuild, IBuilds } from './../models/IBuild.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-builds',
  templateUrl: './dados-builds.page.html',
  styleUrls: ['./dados-builds.page.scss'],
})
export class DadosBuildsPage implements OnInit {

  build: IBuilds;

  constructor(public dodosService: DadosService) { }

  ngOnInit() {
    this.build =this.dodosService.pegarDados('build');
    console.log('build Enviado', this.build);
  }

}
