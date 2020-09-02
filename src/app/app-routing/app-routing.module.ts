import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component'
import { NameInfoComponent } from '../components/name-info/name-info.component';
import { LevelsComponent } from '../components/levels/levels.component';
import { Level1Component } from '../components/level1/level1.component';
import { Level2Component } from '../components/level2/level2.component';
import { Level3Component } from '../components/level3/level3.component';
import { Level4Component } from '../components/level4/level4.component';
import { Levels2UnlockedComponent } from '../components/levels2-unlocked/levels2-unlocked.component';
import { Levels3UnlockedComponent } from '../components/levels3-unlocked/levels3-unlocked.component';
import { Levels4UnlockedComponent } from '../components/levels4-unlocked/levels4-unlocked.component';
import { SourceComponent } from '../components/source/source.component';
import { CorrectComponent } from '../components/correct/correct.component';
import { Correct2Component } from '../components/correct2/correct2.component';
import { Correct3Component } from '../components/correct3/correct3.component';
import { Correct4Component } from '../components/correct4/correct4.component';
import { WrongComponent } from '../components/wrong/wrong.component';
import { Wrong2Component } from '../components/wrong2/wrong2.component';
import { Wrong3Component } from '../components/wrong3/wrong3.component';
import { Wrong4Component } from '../components/wrong4/wrong4.component';


const route: Routes = [
  { path:'home', component:  HomeComponent},
  { path:'source', component:  SourceComponent},
  { path:'level1', component: Level1Component},
  { path:'level2', component: Level2Component},
  { path:'level3', component: Level3Component},
  { path:'level4', component: Level4Component},
  { path:'wrong', component: WrongComponent},
  { path:'correct', component: CorrectComponent},
  { path:'name-info', component: NameInfoComponent},
  { path:'levels', component: LevelsComponent},
  { path:'levels2-unlocked', component: Levels2UnlockedComponent},
  { path:'levels3-unlocked', component: Levels3UnlockedComponent},
  { path:'levels4-unlocked', component: Levels4UnlockedComponent},
  { path:'wrong2', component: Wrong2Component},
  { path:'wrong3', component: Wrong3Component},
  { path:'wrong4', component: Wrong4Component},
  { path:'correct2', component: Correct2Component},
  { path:'correct3', component: Correct3Component},
  { path:'correct4', component: Correct4Component},
  { path:'', pathMatch: 'full', redirectTo: '/home'},
]

@NgModule({
  declarations: [],
  imports: [
   // CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }
