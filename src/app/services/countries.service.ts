import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public rightAnswers: any[];

  constructor(private http: HttpClient) { }

  public getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  public setRightAnswers(answers: any[]) {
    return this.rightAnswers = answers;
  }

  public getRightAnswers() {
    return this.rightAnswers;
  }
}
