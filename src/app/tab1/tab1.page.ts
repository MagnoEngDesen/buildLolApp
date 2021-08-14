import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IBuild } from '../models/iBuild.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Build App';
  listaBuild: IBuild[] = [
    {
      tipoBuild: 'ADC',
      nome: 'Draven',
      imagem: 'https://i.pinimg.com/originals/f4/03/48/f403486ef41dd09e28032b51713127b4.jpg'
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}
//o metodo apresentar Toast informa uma mensagem(rapida) para o usuario( otimo para usar em confirmação//
//é preciso adicionar o metodo a onde queremos que precisa alertar, no caso foi adicionado comando: handler //
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Build adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
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
          }
        }, {
          text: 'SIM, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

}
