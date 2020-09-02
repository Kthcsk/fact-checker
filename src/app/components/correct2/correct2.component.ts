import { Component, OnInit } from '@angular/core';
import { UserNameService } from 'src/app/services/user-name.service';

@Component({
  selector: 'app-correct2',
  templateUrl: './correct2.component.html',
  styleUrls: ['./correct2.component.css']
})
export class Correct2Component implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
