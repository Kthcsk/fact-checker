import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-levels3-unlocked',
  templateUrl: './levels3-unlocked.component.html',
  styleUrls: ['./levels3-unlocked.component.css']
})
export class Levels3UnlockedComponent implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
