import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent  {

listaCurso:string[]=['TypeScript','JavaScript', 'Java', 'C#','PHP'];
habilitar:boolean=true;
  constructor() { }

setHabilitar(){

  this.habilitar=!this.habilitar;
}

}
