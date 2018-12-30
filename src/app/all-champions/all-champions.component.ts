import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/data.service";
import { Champion } from "../models/champion";

@Component({
  selector: "app-all-champions",
  templateUrl: "./all-champions.component.html",
  styleUrls: ["./all-champions.component.scss"],
  providers: [DataService]
})
export class AllChampionsComponent implements OnInit {
  allChampions: Champion[];
  champ: Champion;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getChampionNames();
  }

  getChampionNames() {
    this.dataService
      .getChampionsNames()
      .subscribe((data: Champion[]) => (this.allChampions = data));
  }

  getChampionInfo(championId: number) {
    this.dataService
      .getChampionById(championId)
      .subscribe((data: Champion) => (this.champ = data));
  }
}
