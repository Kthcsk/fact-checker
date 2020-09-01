import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  private name: string
  get userName(): string {
    return this.name
  }

  set userName(userName: string) {
    this.name = userName;
  }

  constructor() { }
}
