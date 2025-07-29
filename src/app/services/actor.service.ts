import { Injectable } from '@angular/core';
import peopleJson from '../../../public/data/actors.json';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  actors: PeopleType[] = peopleJson;

  getPeople() {
    return this.actors;
  }

  getPersonById(id: number) {
    return this.actors.find((actor) => actor.id === id);
  }
}
