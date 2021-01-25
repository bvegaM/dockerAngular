import { Component, OnInit } from '@angular/core';
import { Persona} from '../dataservice/persona';
import {DataService} from '../dataservice/data-service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  persona = new Persona();
  sexo: Object[] =[
    {valor:'M',descripcion:'masculino'},
    {valor:'F',descripcion:'femenino'}
  ]


  constructor(private dataService:DataService) { }

  createPersona(): void{
    this.dataService.createPersona(this.persona).subscribe((persona:Persona)=>{
      alert("Usuario creado correctamente ")
    });
  }

  ngOnInit(): void {
  }

}
