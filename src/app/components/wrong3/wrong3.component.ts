import { Component, OnInit } from '@angular/core';
import { UserNameService } from 'src/app/services/user-name.service';

@Component({
  selector: 'app-wrong3',
  templateUrl: './wrong3.component.html',
  styleUrls: ['./wrong3.component.css']
})
export class Wrong3Component implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
