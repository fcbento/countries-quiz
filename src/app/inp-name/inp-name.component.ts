import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inp-name',
  templateUrl: './inp-name.component.html',
  styleUrls: ['./inp-name.component.scss']
})
export class InpNameComponent implements OnInit {

  public user: FormGroup;

  constructor(public formBuilder: FormBuilder, private service: UserService, private router: Router) {
    this.user = this.formBuilder.group({
      name: ['', [Validators.minLength(4)]],
    });
  }

  ngOnInit() {
    console.log('CI/CD - Test')
  }

  setUsername() {
    this.service.setName(this.user.value.name);
    this.router.navigateByUrl('/option')
  }

}
