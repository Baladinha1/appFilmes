import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  listaAtores: IAtores[] = [
    {
      nome: 'Tom Holland',
      idade: '1996-06-01',
      classificacao: 8,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2qhIDp44cAqP2clOgt2afQI07X8.jpg',
      genero: 'masculino',
      pagina: '/tomholland',
      nascimento: 'Surrey, England, UK'
    },
    {
      nome: 'Johnny Depp',
      idade: '1963-06-09',
      classificacao: 4,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg',
      genero: 'masculino',
      pagina: '/johnnydeep',
      nascimento: 'Owensboro, Kentucky, USA'
    },
    {
      nome: 'Ryan Reynolds',
      idade: '1976-10-23',
      classificacao: 6,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg',
      genero: 'masculino',
      pagina: '/ryanreynolds',
      nascimento: 'Vancouver, British Columbia, Canada'
    },
    {
      nome: 'Chloë Grace Moretz',
      idade: '1996-06-01',
      classificacao: 8,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uIlu8tHJahd605Tknh9XbTbuptR.jpg',
      genero: 'Feminino',
      pagina: '/chloegrace',
      nascimento: 'Atlanta, Georgia, USA'
    },
    {
      nome: 'Robert De Niro',
      idade: '1943-08-17',
      classificacao: 10,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
      genero: 'Masculino',
      pagina: '/robertdeniro',
      nascimento: 'New York, USA'
    }
  ];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  exibirFilme(Atores: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtores:Atores}};
    this.router.navigate(['Filmes-detalhe'],navigationExtras);
  }
}
