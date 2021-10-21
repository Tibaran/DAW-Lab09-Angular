import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../servicios/personajes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  personajes:any[] = []
  termino:any;

  constructor( private activatedRoute:ActivatedRoute,
              private _personajesService: PersonajesService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.personajes = this._personajesService.buscarPersonajes( params['termino'] );
      console.log( this.personajes );
    });

  }

}
