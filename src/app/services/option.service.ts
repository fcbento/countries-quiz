import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  public option: string = '';

  constructor() { }

  public setOption(option: string) {
    this.option = option;
  }

  public getOption() {
    return this.option;
  }
}
