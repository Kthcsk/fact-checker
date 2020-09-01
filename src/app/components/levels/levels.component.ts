import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  private name: string
  
  get userName(): string {
    return this.name
  }

  constructor(userName:UserNameService) { }

  ngOnInit(): void {
  }

}
