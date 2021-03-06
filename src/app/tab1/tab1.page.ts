import { IBuild } from './../models/IBuild.model';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  titulo = 'Build App';
  listaBuildMenu: IBuild[] = [
    {
      tipoBuild: 'ADC',
      imagem:
        'https://i.pinimg.com/originals/f4/03/48/f403486ef41dd09e28032b51713127b4.jpg',
      pagina: '/adc',
    },
    {
      tipoBuild: 'MID',
      imagem:
        'https://i.pinimg.com/564x/52/1e/dc/521edc2b335a2f8de2860014d4dc6767.jpg',
      pagina: '/mid',
    },
  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) {}

  exibirBuild(build: IBuild) {
    this.dadosService.guardarDados('build', build);
    this.route.navigateByUrl('/dados-builds');
  }
  //o metodo apresentar Toast informa uma mensagem(rapida) para o usuario( otimo para usar em confirmação//
  //é preciso adicionar o metodo a onde queremos que precisa alertar, no caso foi adicionado comando: handler //
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Build adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a Build',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, favoritar',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }
}
