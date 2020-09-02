import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-correct',
  templateUrl: './correct.component.html',
  styleUrls: ['./correct.component.css']
})
export class CorrectComponent implements OnInit {

  get userName(): string {
    return this.userNameService.userName;
  }

  constructor(private userNameService: UserNameService) { }

  ngOnInit(): void {
  }

}
