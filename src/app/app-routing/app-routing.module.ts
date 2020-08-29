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
import { CorrectComponent } from '../components/correct/correct.component';
import { WrongComponent } from '../components/wrong/wrong.component';
import { SourceComponent } from '../components/source/source.component';

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
