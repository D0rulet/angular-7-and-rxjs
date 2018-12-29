import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map, tap, catchError } from 'rxjs/operators';

import { Champion } from '../models/champion'
import { Realm } from '../models/realm'

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  // getAllRealms() { }

  // addRealm(realm: Realm) { }

  getAllChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>('http://localhost:3000/champions')
  }

  // getChampionById(championId: number) { }

  // addChampion(newChampion: Champion) { }

  // updateChampion(updatedChampion: Champion) { }

  // deleteChampion(championId: number) { }
}
