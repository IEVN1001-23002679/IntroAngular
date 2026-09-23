import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas{
  num1: string = '';
  num2: string = '';
  area: number = 0;
  figura: string = '';

  calcular(): void {

  switch (this.figura) {

    case 'triangulo':
    this.area = (parseInt(this.num1) * parseInt(this.num2)) / 2;
    break;

    case 'rectangulo':
    this.area = parseInt(this.num1) * parseInt(this.num2);
    break;

    case 'circulo':
    this.area = 3.1416 * parseInt(this.num1) * parseInt(this.num1);
    break;

    case 'pentagono':
    this.area = (parseInt(this.num1) * parseInt(this.num2)) / 2;
    break;
  }
}
}


