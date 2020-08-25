import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { Level3Component } from './components/level3/level3.component';
import { Level4Component } from './components/level4/level4.component';
import { WrongComponent } from './components/wrong/wrong.component';
import { CorrectComponent } from './components/correct/correct.component';

import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'level1',
    component: Level1Component
  },
  {
    path: 'level2',
    component: Level2Component
  },
  {
    path: 'level3',
    component: Level3Component
  },
  {
    path: 'level4',
    component: Level4Component
  },
  {
    path: 'wrong',
    component: WrongComponent
  },
  {
    path: 'correct',
    component: CorrectComponent
  },
]

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
    CorrectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
