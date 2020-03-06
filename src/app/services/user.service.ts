import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userName: string = '';

  constructor() { }

  public setName(name: string) {
    this.userName = name;
  }

  public getName() {
    return this.userName;
  }

}
