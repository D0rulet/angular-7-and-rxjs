import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabComponent } from "./tab/tab.component";
import { NewChampionComponent } from "./new-champion/new-champion.component";
import { AllChampionsComponent } from "./all-champions/all-champions.component";
import { MyChampionsComponent } from "./my-champions/my-champions.component";

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    NewChampionComponent,
    AllChampionsComponent,
    MyChampionsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
