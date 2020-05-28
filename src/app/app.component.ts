import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  whichOne:string = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBHoDr-74U6Q-59xrzDziN7rwF9KderS8k",
      authDomain: "recipebook-426a6.firebaseapp.com"
    });
  }

  OnNavigate(feature:string){
    this.whichOne = feature;
  }

  
}
