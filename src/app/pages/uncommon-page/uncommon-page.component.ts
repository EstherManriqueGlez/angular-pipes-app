import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Alberto',
  gender: 'male',
  age: 23,
  address: 'Ottawa, Canada',
};

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 29,
  address: 'Toronto, Canada',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18nPlural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  });

  clients = signal<string[]>([
    'Maria',
    'Pedro',
    'Juan',
    'Ana',
    'Luis',
    'Carlos',
    'Lucia',
    'Fernando',
  ]);

  deleteClient(): void {
    this.clients.update((clients) => clients.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canada',
    profession: 'Software Developer',
  };

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      // console.log('Promise resolved');
    }, 3500);
  });

  // Async Pipe with Observables
  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    // tap((value) => console.log('tap value: ', value))
  );
}
