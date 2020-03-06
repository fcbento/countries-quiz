import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questions;
  public country;
  public current: number = 1;

  constructor(private countryService: CountriesService) { }

  ngOnInit() {

    this.countryService.getCountries().subscribe((res) => {
      this.questions = res;
      this.getRandomCountry(this.questions);
    });

  }

  getRandomCountry(arr: []) {
    this.country = arr[Math.floor(Math.random() * arr.length)];
  }

  goToNextQuestion() {
    this.current += 1;
    if (this.current === 11) {
      this.current = 11;
    }
    this.getRandomCountry(this.questions);
  }

  finishQuiz(){
    console.log('finish')
  }
}
