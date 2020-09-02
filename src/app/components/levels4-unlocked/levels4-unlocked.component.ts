import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-levels4-unlocked',
  templateUrl: './levels4-unlocked.component.html',
  styleUrls: ['./levels4-unlocked.component.css']
})
export class Levels4UnlockedComponent implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
