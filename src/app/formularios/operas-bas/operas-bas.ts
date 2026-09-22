import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string=''
  num2:string=''
  resultado:number=0
  operacion:string='';

  calcular(): void {

  const numero1 = parseInt(this.num1);
  const numero2 = parseInt(this.num2);

  switch (this.operacion) {

    case 'sumar':
      this.resultado = numero1 + numero2;
      break;

    case 'restar':
      this.resultado = numero1 - numero2;
      break;

    case 'dividir':
      this.resultado = numero1 / numero2;
      break;

    case 'multiplicar':
      this.resultado = numero1 * numero2;
      break;
  }
}
  /* sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2)
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2)
  } */


}
