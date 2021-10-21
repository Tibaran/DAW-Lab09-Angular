
import { Injectable } from '@angular/core';

@Injectable()
export class PersonajesService {

  private personajes:Personaje[] = [
    {
      nombre: "Hourglass Twins",
      bio: "Los Hourglass Twins son planetas binarios que orbitan entre sí. Ember Twin es principalmente roca desértica dividida en dos mitades por un amplio cañón ecuatorial, y Ash Twin está compuesto casi en su totalidad de arena colocada sobre un núcleo rocoso negro. Ambos planetas orbitan muy cerca del Sol.",
      img: "assets/img/Hourglass_twins.png",
      aparicion: "Primer planeta",
      casa:"Astro"
    },
    {
      nombre: "Timber Hearth",
      bio: "Timber Hearth es el planeta natal de los Hearthians y donde el jugador comienza su viaje. Tiene una composición principalmente rocosa acentuada con bosques, crestas y cascadas. El terreno tiene poca variación fuera de llanuras cubiertas de hierba, montañas y grandes cráteres, uno de los cuales forma el área del pueblo .",
      img: "assets/img/Timberhearth.png",
      aparicion: "Segundo planeta",
      casa:"Astro"
    },
    {
      nombre: "Chert",
      bio: "Chert es un astronauta de Hearthian ubicado en su campamento en el polo norte de Ember Twin . Tienen la tarea de observar la galaxia y actualizar los mapas de estrellas. Su campamento está lleno de equipos utilizados para la astronomía. Toca la batería.",
      img: "assets/img/Chert.png",
      aparicion: "Hourglass Twins",
      casa: "Viajero"
    },
    {
      nombre: "Esker",
      bio: "Esker es uno de los primeros astronautas de Hearthian y está ubicado en su puesto de avanzada en The Attlerock . Solían ejecutar el Puesto Avanzado Lunar cuando era necesario para reparaciones frecuentes de barcos, pero ahora simplemente 'vigila las cosas'. Silva",
      img: "assets/img/Esker.png",
      aparicion: "The Attlerock - Timber Hearth Moon",
      casa:"Viajero"
    },
    {
      nombre: "Brittle Hollow",
      bio: "Brittle Hollow es el tercero de los seis planetas del sistema solar de Outer Wilds. Como corresponde a su nombre, el planeta consiste en una corteza rocosa quebradiza, que rodea un interior hueco con un gran Agujero Negro que sirve como núcleo del planeta. Los bombardeos regulares de la luna del planeta hacen que fragmentos de la frágil corteza se rompan a lo largo del circuito y caigan en el núcleo del agujero negro.",
      img: "assets/img/Brittle_Hollow.png",
      aparicion: "Tercer planeta",
      casa: "Astro"
    },
    {
      nombre: "Riebeck",
      bio: "Riebeck es un arqueólogo de Hearthian ubicado en el cruce de Brittle Hollow . Toca el banjo.",
      img: "assets/img/Riebeck.jpg",
      aparicion: "Brittle Hollow",
      casa: "Viajero"
    },
    {
      nombre: "Gabbro",
      bio: "Gabbro es un astronauta de Hearthian ubicado en su campamento en una isla en Giant's Deep . Encontraron múltiples estatuas de Nomai y llevaron la estatua a los pares de personajes jugadores al observatorio en Timber Hearth . Se emparejan accidentalmente con uno durante el mismo bucle que el personaje del jugador, lo que significa que ambos experimentan los bucles de tiempo, pero solo recuerdan haber comenzado en el bucle de tiempo 9.318.054. Toca la flauta.",
      img: "assets/img/Gabbro.jpg",
      aparicion: "Giants Deep",
      casa: "Viajero"
    },
    {
      nombre: "Feldspar",
      bio: "Feldespato es un astronauta de Hearthian ubicado dentro de Dark Bramble . Son uno de los miembros fundadores de Outer Wilds Ventures y son venerados como uno de los mejores pilotos dentro de los Viajeros de Hearthian . Fueron los primeros Hearthianos en ser lanzados intencionalmente al espacio, completando una órbita alrededor de Timber Hearth y luego haciendo el primer aterrizaje en Attlerock . Han viajado a través del sistema solar (puedes encontrar sus máquinas de cinta en varios planetas) pero ha estado varados en Dark Bramble durante algún tiempo. Toca la armónica.",
      img: "assets/img/Feldspar.jpg",
      aparicion: "Dark Bramble",
      casa: "Viajero"
    },
    {
      nombre: "Giant's Deep",
      bio: "Giant's Deep es un planeta oceánico formado por capas de fluidos cada vez más densas, con cinco pequeñas islas en la superficie. Llenos de un clima turbulento y una atmósfera densa, los ciclones masivos se forman con frecuencia y viajan a lo largo de la superficie del agua. El planeta tiene un núcleo de coral rodeado de un fluido muy denso.",
      img: "assets/img/Giants_Deep.png",
      aparicion: "Cuarto planeta",
      casa: "Astro"
    },
    {
      nombre: "Dark Bramble",
      bio: "Dark Bramble es una red grande y confusa de enredaderas retorcidas y pasajes de teletransportación, los restos implosionados de un quinto planeta que ha sido infectado desde hace mucho tiempo e invadido por el crecimiento de plantas que dobla el espacio. Es el único planeta que presenta una fauna hostil en forma de rape .",
      img: "assets/img/Dark_Bramble.png",
      aparicion: "Quinto planeta",
      casa: "Astro"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getPersonajes():Personaje[]{
    return this.personajes;
  }

  getPersonaje( idx: any ){
    return this.personajes[idx];
  }

  buscarPersonajes( termino:string ):Personaje[]{

    let personajesArr:Personaje[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.personajes.length; i ++ ){

      let personaje = this.personajes[i];

      let nombre = personaje.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        personaje.idx = i;
        personajesArr.push( personaje )
      }

    }

    return personajesArr;

  }


}


export interface Personaje{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
};
