import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NameInfoComponent } from './components/name-info/name-info.component';
import { LevelsComponent } from './components/levels/levels.component';
import { MenuComponent } from './components/menu/menu.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { Level3Component } from './components/level3/level3.component';
import { Level4Component } from './components/level4/level4.component';
import { WrongComponent } from './components/wrong/wrong.component';
import { CorrectComponent } from './components/correct/correct.component';
import { SourceComponent } from './components/source/source.component'

import { AppRoutingModule } from '../app/app-routing/app-routing.module';

import { LevelsJsonService } from '../app/services/levels-json.service';
import { HttpClientModule } from '@angular/common/http';
import { Wrong2Component } from './wrong2/wrong2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component,
    WrongComponent,
    CorrectComponent,
    NameInfoComponent,
    LevelsComponent,
    SourceComponent,
    Wrong2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LevelsJsonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
