import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  onButtonClick() {
    this.httpClient.get('https://coris.network/cosmos/api/validators').subscribe((validators: any) => this.data = validators[0]);
  }

  data = {
    'simple key': 'simple value'
  };

  get code () {
    return JSON.stringify(this.data, null, 2);
  }

  set code (v) {
    try{
      this.data = JSON.parse(v);
    }
    catch(e) {
      console.log('error occored while you were typing the JSON');
    };
  }

}
