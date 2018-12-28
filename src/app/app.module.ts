import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabComponent } from './tab/tab.component';

import {MatTabsModule} from '@angular/material/tabs';
import { NewChampionComponent } from './new-champion/new-champion.component';
import { AllChampionsComponent } from './all-champions/all-champions.component';
import { MyChampionsComponent } from './my-champions/my-champions.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    NewChampionComponent,
    AllChampionsComponent,
    MyChampionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
