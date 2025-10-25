import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator'
})

export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    // Option 1: Using a thernary operator
    // return (value === Creator.DC) ? 'DC' : 'Marvel';

    // Option 2: Using bracket notation
    return Creator[value];
  }
}