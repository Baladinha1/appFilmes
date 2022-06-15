import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import {IFilme} from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 4,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação','Fantasia','Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 8.6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Ação','Ficção científica','Aventura'],
      pagina: '/avengers'
    },
    {
      nome: 'Velozes e Furiosos: Desafio em Tóquio',
      lancamento: '11/08/2006 (BR)',
      duracao: '1h44m',
      classificacao: 6.4,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qexEesWpZgxLFlOrm54Sjn3Z7Y0.jpg',
      generos: ['Ação','Carros','Aventura'],
      pagina: '/velozes e furiosos'
    },
    {
      nome: 'Jogador Nº 1',
      lancamento: '29/03/2018 (BR)',
      duracao: '2h20m',
      classificacao: 7.6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sN46sgCsWqwgHMu4mEtKJ19knVr.jpg',
      generos: ['Ação','Crime','Drama', 'Thiller'],
      pagina: '/jogadorn1'
    },
    {
      nome: 'O Imbatível III: Redenção',
      lancamento: '22/05/2010',
      duracao: '1h36m',
      classificacao: 7.5,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i1fetl7jL48JUIUt2PZFlCA5Of.jpg',
      generos: ['Ação','thriller'],
      pagina: '/imbativelIII'
    }
  ];
    exibirFilme(filme: IFilme){
      const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
      this.router.navigate(['filme-detalhe'],navigationExtras);
    }
    async exibirAlertaFavorito(filme: IFilme) {
      const alert = await this.alertController.create({
        header: 'Meus Favoritos',
        message: 'Deseja realmente favoritar o filme?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              filme.favorito=false;
            }
          }, {
            text: 'Sim, favoritar.',
            handler: () => {
              filme.favorito=true;
              this.apresentarToast();
            }
          }
        ]
      });
      await alert.present();
    }
    async apresentarToast() {
      const toast = await this.toastController.create({
        message: 'Filme adicionado aos favoritos...',
        duration: 2000,
        color: 'success',
        position: 'top'
      });
      toast.present();
    }
  }

