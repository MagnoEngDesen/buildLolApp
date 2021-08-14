import { AlertController, ToastController } from '@ionic/angular';
import { IBuilds } from './../../models/IBuild.model';
import { DadosService } from './../../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adc',
  templateUrl: './adc.page.html',
  styleUrls: ['./adc.page.scss'],
})
export class AdcPage implements OnInit {
  listaBuild: IBuilds[] = [
    {
      tipoBuild: 'ADC',
      nome: 'Jhin',
      imagem: 'https://i.ytimg.com/vi/K2rzzqeE4CA/maxresdefault.jpg',
      discrucao: 'Jhin é um meticuloso psicopata criminoso que acredita que o assassinato é uma arte...'
    },
    {
      tipoBuild: 'ADC',
      nome: 'Xayah',
      imagem: 'https://i.pinimg.com/280x280_RS/67/02/63/670263427942603963cffbedbe996cc6.jpg',
      discrucao: 'Mortal e precisa, Xayah é uma vastaya revolucionária que trava sua própria batalha para salvar seu povo...'
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) {}
  exibirBuilds(build: IBuilds) {
    this.dadosService.guardarDados('build', build);
    this.route.navigateByUrl('/dados-builds');
  }

  ngOnInit() {}

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
