import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroesFilter',
  standalone: false,
})
export class HeroesFilterPipe implements PipeTransform {

  transform(value: IHeroes[] , args: string): IHeroes[] {
    let filter:string=args?args.toLocateLowerCase():'';

    return filter?value.filter((hero:IHeroes)=>
    hero.nombre.toLocateLowerCase().indexOf(filter)!==-1):value;
  }
}
