import { Component, OnInit } from '@angular/core';
import { UserNameService } from 'src/app/services/user-name.service';

@Component({
  selector: 'app-wrong4',
  templateUrl: './wrong4.component.html',
  styleUrls: ['./wrong4.component.css']
})
export class Wrong4Component implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
