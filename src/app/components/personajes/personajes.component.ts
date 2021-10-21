import { Component, OnInit } from '@angular/core';
import { PersonajesService, Personaje } from '../../servicios/personajes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  personajes:Personaje[] = [];

  constructor( private _personajesService:PersonajesService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.personajes = this._personajesService.getPersonajes();
    // console.log( this.heroes );
  }

  verPersonaje( idx:number ){
    this.router.navigate( ['/personaje',idx] );
  }

}
