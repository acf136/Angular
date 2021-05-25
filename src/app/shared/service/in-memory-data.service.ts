import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  constructor( ) { }

  createDb() {
    return { usersArray:
      [
        {id: 1, name: 'Perico', secondName: 'DeLosPalotes', impagado: true, email: ''  },
        {id: 2, name: 'John',   secondName: 'Doe', impagado: false, email: '' },
        {id: 3, name: 'Andrés',  secondName: 'Trozado Micasa', impagado: false, email: ''  },
        {id: 4, name: 'Armando',  secondName: 'Bronca Segura', impagado: true, email: '' },
        {id: 5, name: 'Elena',  secondName: 'Nieto de los Bosques',  impagado: false, email: '' },
        {id: 6, name: 'Aquiles',  secondName: 'Cuesta Caro', impagado: true, email: '' },
        {id: 7, name: 'Noé',  secondName: 'Tirado Nada',  impagado: false, email: '' },
        {id: 8, name: 'Dolores',  secondName: 'Grande de Cabeza',  impagado: true, email: '' },
      ]
    };
  }

}
