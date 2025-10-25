import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from "../../pipes/hero-text-color.pipe";
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
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
}
