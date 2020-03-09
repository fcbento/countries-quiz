import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questions;
  public country;
  public current: number = 1;
  public answer: string = '';
  public rightAnswers = [];

  constructor(private countryService: CountriesService, private router: Router) { }

  ngOnInit() {

    this.countryService.getCountries().subscribe((res) => {
      this.questions = res;
      this.getRandomCountry(this.questions);
    });

  }

  getRandomCountry(arr: []) {
    this.country = arr[Math.floor(Math.random() * arr.length + 1)];
  }

  goToNextQuestion() {
    this.checkAnswer(this.answer, this.country['name']);
    this.current += 1;
    this.answer = '';
    this.getRandomCountry(this.questions);
  }


  finishQuiz() {
    this.checkAnswer(this.answer.toUpperCase(), this.country['name'].toUpperCase())
    this.countryService.setRightAnswers(this.rightAnswers);
    this.router.navigateByUrl('/score')
  }

  checkAnswer(answer: string, rightAnswer: string) {

    let ans = answer.toUpperCase()
    let rta = rightAnswer.toUpperCase();

    if (rta.includes(ans)) {
      this.rightAnswers.push(rightAnswer);
    }
  }
}
