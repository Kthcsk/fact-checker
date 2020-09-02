import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';


@Component({
  selector: 'app-levels2-unlocked',
  templateUrl: './levels2-unlocked.component.html',
  styleUrls: ['./levels2-unlocked.component.css']
})
export class Levels2UnlockedComponent implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
