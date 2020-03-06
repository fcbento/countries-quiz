import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { OptionService } from '../services/option.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  public name: string;

  constructor(private userService: UserService, private optionService: OptionService, private router: Router) { }

  ngOnInit() {
    this.name = this.userService.getName();
  }

  setOption(option: string) {
    this.optionService.setOption(option);
    this.router.navigateByUrl('/quiz')
  }

}
