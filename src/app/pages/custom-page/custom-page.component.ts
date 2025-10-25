import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal<string>('Alberto Garcia');

  upperCase = signal<boolean>(true);

  toggleCase() {
    // this.upperCase() ? this.upperCase.set(false) : this.upperCase.set(true);
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal<Hero[]>(heroes);

  sortBy = signal<keyof Hero | null>(null);

  sortDirection = signal<'asc' | 'desc'>('asc');

  searchQuery = signal<string>('');

  onSortByChange(value: keyof Hero | null) {
    if (this.sortBy() === value) {
      // Si es la misma columna, cambiar dirección
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      // Si es diferente columna, empezar con ascendente
      this.sortBy.set(value);
      this.sortDirection.set('asc');
    }
  }
}
