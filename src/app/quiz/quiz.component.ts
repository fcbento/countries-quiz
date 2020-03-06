import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  
  public questions: number = 10;
    
  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    //this.countryService.getCountries().subscribe(res => console.log(res))
    this.question();
  }

  public question(){
    let i: number = 0;

  }

}
