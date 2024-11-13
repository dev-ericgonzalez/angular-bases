import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {

  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 100
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = {id: uuid(), ...character};
    this.character.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.character = this.character.filter(character => character.id !== id);
  }

}
