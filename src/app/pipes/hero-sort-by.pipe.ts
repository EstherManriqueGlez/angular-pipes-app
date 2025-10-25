import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null, direction: 'asc' | 'desc' = 'asc'): Hero[] {
    if (!sortBy) return value;

    const changeDirection = direction === 'asc' ? 1 : -1;

    switch (sortBy) {
      case 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name) * changeDirection);

      case 'canFly':
        return value.sort((a, b) => ((a.canFly ? 1 : 0) - (b.canFly ? 1 : 0)) * changeDirection);

      case 'color':
        return value.sort((a, b) => (a.color - b.color) * changeDirection);

      case 'creator':
        return value.sort((a, b) => (a.creator - b.creator) * changeDirection);

      default:
        return value;
    }
  }
}
