import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent{

  public contadorClick: number = 1;
  public nome: string = '';

  adicionarClique(){
    this.contadorClick++;
  }

  zerarContador(){
    this.contadorClick = 0;
  }

  KeyUp(event: any){
    this.nome = event.target.value;
  }
}
