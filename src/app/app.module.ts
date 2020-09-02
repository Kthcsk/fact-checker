import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NameInfoComponent } from './components/name-info/name-info.component';
import { MenuComponent } from './components/menu/menu.component';
import { LevelsComponent } from './components/levels/levels.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { Level3Component } from './components/level3/level3.component';
import { Level4Component } from './components/level4/level4.component';
import { Levels2UnlockedComponent } from './components/levels2-unlocked/levels2-unlocked.component';
import { Levels3UnlockedComponent } from './components/levels3-unlocked/levels3-unlocked.component';
import { Levels4UnlockedComponent } from './components/levels4-unlocked/levels4-unlocked.component';
import { SourceComponent } from './components/source/source.component'
import { LevelsJsonService } from '../app/services/levels-json.service';

import { CorrectComponent } from './components/correct/correct.component';
import { Correct2Component } from './components/correct2/correct2.component';
import { Correct3Component } from './components/correct3/correct3.component';
import { Correct4Component } from './components/correct4/correct4.component';
import { WrongComponent } from './components/wrong/wrong.component';
import { Wrong2Component } from './components/wrong2/wrong2.component';
import { Wrong3Component } from './components/wrong3/wrong3.component';
import { Wrong4Component } from './components/wrong4/wrong4.component';




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


    Wrong2Component,
    Levels2UnlockedComponent,
    Levels3UnlockedComponent,
    Levels4UnlockedComponent,
    Correct2Component,
    Wrong3Component,
    Wrong4Component,
    Correct3Component,
    Correct4Component


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
