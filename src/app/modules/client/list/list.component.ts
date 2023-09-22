import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  clientes: Cliente[]=[];
  tiulo: String="Calculadora xD";

  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;

  constructor(){}

  onSumar():void {
    this.resultado = this.operandoA + this.operandoB;
  }
}



