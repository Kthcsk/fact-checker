import { Component, OnInit } from '@angular/core';
import { UserNameService } from 'src/app/services/user-name.service';

@Component({
  selector: 'app-wrong2',
  templateUrl: './wrong2.component.html',
  styleUrls: ['./wrong2.component.css']
})
export class Wrong2Component implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
