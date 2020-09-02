import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-name-info',
  templateUrl: './name-info.component.html',
  styleUrls: ['./name-info.component.css']
})
export class NameInfoComponent implements OnInit {

  constructor(private http: HttpClient, private userNameService: UserNameService) { }

  userName: string;

  captureName(userName:any) {
    console.log(userName)
    this.userNameService.userName = userName;
 
  }

  ngOnInit(): void {
  }

}
