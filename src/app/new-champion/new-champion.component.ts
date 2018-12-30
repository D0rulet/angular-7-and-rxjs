import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/data.service";
import { Realm } from "../models/realm";
import { Champion } from "../models/champion";
import { ChampionName } from "../models/championName";

@Component({
  selector: "app-new-champion",
  templateUrl: "./new-champion.component.html",
  styleUrls: ["./new-champion.component.scss"],
  providers: [DataService]
})
export class NewChampionComponent implements OnInit {
  constructor(private dataService: DataService) {}

  realms: Realm[];
  newChampion: Champion = new Champion();
  submitted: boolean = false;

  ngOnInit() {
    this.dataService
      .getAllRealms()
      .subscribe((data: Realm[]) => (this.realms = data));
  }

  onSubmit() {
    this.dataService
      .addChampionName({ name: this.newChampion.name })
      .subscribe((data: ChampionName) => {
        console.log(data);
      });
    this.dataService
      .addChampion(this.newChampion)
      .subscribe((data: Champion) => {
        console.log(data);
        this.submitted = true;
      });
  }
}
