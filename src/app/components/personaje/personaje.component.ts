import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PersonajesService } from '../../servicios/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html'
})
export class PersonajeComponent {

  personaje:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _personajesService: PersonajesService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.personaje = this._personajesService.getPersonaje( params['id'] );
        // console.log(this.personaje);
    });

  }

}
