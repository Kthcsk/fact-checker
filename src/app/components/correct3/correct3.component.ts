import { Component, OnInit } from '@angular/core';
import { UserNameService } from 'src/app/services/user-name.service';

@Component({
  selector: 'app-correct3',
  templateUrl: './correct3.component.html',
  styleUrls: ['./correct3.component.css']
})
export class Correct3Component implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
