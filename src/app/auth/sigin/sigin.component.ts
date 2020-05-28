import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSignin(form:NgForm) {
    this.authService.signin(form.value.email, form.value.password);
  }

}
