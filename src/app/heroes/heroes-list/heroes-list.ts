import { Component } from '@angular/core';
import {IHeroes} from '../heroes'; 

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  //styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

imageWidth:number=40;
imageMargin:number=2;
muestraImage:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImage=!this.muestraImage;
}

  heroes:IHeroes[]=[

    {
    imagen:'https://dragonball-api.com/transformaciones/goku_ssj3.webp',
    nombre:'Goku SSJ3',
    description:'El protagonista de la serie, conocido por su gran poder y personalidad amigable.',
    race:'Saiyan',
    ki:24000000000000
    },

    {
    imagen:'https://dragonball-api.com/transformaciones/gohan_ssj-removebg-preview.webp',
    nombre:'Gohan SSJ',
    description:'Es un mestizo entre saiyano y humano terrícola. Es el primer hijo de Son Goku y Chi-Chi, hermano mayor de Son Goten, esposo de Videl y padre de Pan.',
    race:'Saiyan',
    ki:4700000000
    },

    {
    imagen:'https://dragonball-api.com/transformaciones/trunks_ssj-removebg-preview.webp',
    nombre:'Trunks SSJ',
    description:'Hijo de Vegeta y Bulma. Es un mestizo entre humano terrícola y Saiyano nacido en la Tierra, el cual es introducido en el Arco de los Androides y Cell.',
    race:'Saiyan',
    ki:905000000
    },

    {
    imagen:'https://dragonball-api.com/characters/Bardock_Artwork.webp',
    nombre:'Bardock',
    description:'Es un saiyano de clase baja proveniente del Planeta Vegeta del Universo 7. Él es el esposo de Gine y padre biológico de Kakarotto y Raditz',
    race:'Saiyan',
    ki:450000
    },

    {
    imagen:'https://dragonball-api.com/transformaciones/Broly_Super_Saiyajin_Legendario_1.webp',
    nombre:'Broly SSJ Legendary',
    description:'En Saiyajin que posee un poder gigantesco e incontrolable. Incluso cuando apenas era un bebé su nivel de poder alcanzaba cifras inmensas que provocaban asombro y preocupación entre los de su raza',
    race:'Saiyan',
    ki:11200000000000000000000000000000000000000000
    } 
  ]
}
