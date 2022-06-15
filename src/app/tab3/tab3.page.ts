import { ISeries } from '../model/ISeries';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  listaSeries: ISeries[] = [
    {
      nome: 'Spy x Family',
      lancamento: '09/04/2022',
      duracao: '25 Episódios',
      classificacao: 8.7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wJOLiZIDvtmNbOaaHxQrRGzCAEu.jpg',
      generos: ['Animação', 'Comédia', 'Action' , 'Adventure', 'Crime'],
      pagina: '/spyxfamily'
    },
    {
      nome: 'Cavaleiro da Lua',
      lancamento: '30/03/2022 (BR)',
      duracao: '6 Episódios',
      classificacao: 6.0,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg',
      generos: ['Action', 'Adventure', 'Sci-Fi & Fantasy','Mistério'],
      pagina: '/cavaleirodalua'
    },
    {
      nome: 'Stranger Things',
      lancamento: '15/07/2016',
      duracao: '4 Temporadas',
      classificacao: 8.6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      generos: ['Sci-Fi & Fantasy', 'Drama', 'Mistério'],
      pagina: '/strangerthings'
    },
    {
      nome: 'Round 6',
      lancamento: '17/09/2021',
      duracao: '1 Temporada',
      classificacao: 4,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6gcHdboppvplmBWxvROc96NJnmm.jpg',
      generos: ['Action & Adventure', 'Mistério', 'Drama'],
      pagina: '/round6'
    },
    {
      nome: 'The Boys',
      lancamento: '25/7/2019',
      duracao: '3 Temporada',
      classificacao: 8.4,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg',
      generos: ['Sci-Fi & Fantasy', 'Action & Adventure'],
      pagina: '/theboys'
    }
  ];
  exibirFilme(series: ISeries){
    const navigationExtras: NavigationExtras = {state:{paramSeries:series}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }
}
