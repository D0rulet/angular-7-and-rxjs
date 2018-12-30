import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Realm } from '../models/realm';

@Component({
  selector: 'app-new-champion',
  templateUrl: './new-champion.component.html',
  styleUrls: ['./new-champion.component.scss'],
  providers: [DataService]
})
export class NewChampionComponent implements OnInit {
  realms: Realm[]
  selectedRealm: string
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllRealms().subscribe(
      (data: Realm[]) => this.realms = data,
    )
  }

}
