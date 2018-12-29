import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service'
import { Champion } from '../models/champion'

@Component({
  selector: 'app-all-champions',
  templateUrl: './all-champions.component.html',
  styleUrls: ['./all-champions.component.scss'],
  providers: [DataService]
})
export class AllChampionsComponent implements OnInit {
  allChampions: Champion[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllChampions().subscribe(
      (data: Champion[]) => this.allChampions = data
    );
  }

}
