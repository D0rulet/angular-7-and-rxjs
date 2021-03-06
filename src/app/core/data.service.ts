import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map, tap, catchError } from 'rxjs/operators';

import { Champion } from '../models/champion'
import { Realm } from '../models/realm'
import { ChampionName } from '../models/championName';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getAllRealms(): Observable<Realm[]> {
    return this.http.get<Realm[]>('http://localhost:3000/realms')
  }

  getChampionsNames(): Observable<Champion[]> {
    return this.http.get<Champion[]>('http://localhost:3000/championsNames')
  }

  // addRealm(realm: Realm) { }

  getChampionById(championId: number): Observable<Champion> {
    return this.http.get<Champion>(`http://localhost:3000/champions/${championId}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'M**e k-na!'
      })
    })
  }

  addChampion(newChampion: Champion): Observable<Champion> {
    return this.http.post<Champion>('http://localhost:3000/champions', newChampion)
  }

  addChampionName(newChampionName: ChampionName): Observable<ChampionName> {
    return this.http.post<ChampionName>('http://localhost:3000/championsNames', newChampionName)
  }

  // updateChampion(updatedChampion: Champion) { }

  // deleteChampion(championId: number) { }
}
