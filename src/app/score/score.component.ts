import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  public score;

  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    this.score = this.countryService.getRightAnswers().length || 0 ;
  }

}
