import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
  transform(value: Color): string {
    // Option 1: Using a predefined mapping object
    // switch (value) {
    //   case Color.red:
    //     return 'Red';
    //   case Color.black:
    //     return 'Black';
    //   case Color.blue:
    //     return 'Blue';
    //   case Color.green:
    //     return 'Green';
    // }

    // Option 2: Using the enum reverse mapping feature
    return Color[value];
  }
}