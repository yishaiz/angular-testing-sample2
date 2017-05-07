import { Component, OnInit } from '@angular/core';
import { Question } from "./models/question.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  questions : Array<Question>;

  constructor() {
    this.questions = [];
  }


  ngOnInit() : void {
    this.questions = [
      {
        controlType: 'text-input',
        id: 'first',
        label: 'My First',
        required: false
      },
      {
        controlType: 'text-input',
        id: 'second',
        label: 'Second!',
        required: true
      },
      {
        controlType: 'textarea',
        id: 'third',
        label: 'third - textarea !',
        required: true
      },
      {
        controlType: 'select',
        id: 'fourth',
        label: 'fourth - select!',
        required: true,
        options: [
          { 'label': 'red', 'value': 1 },
          { 'label': 'blue', 'value': 2 },
          { 'label': 'green', 'value': 3 },
          { 'label': 'yellow', 'value': 4 },
          { 'label': 'black', 'value': 5 },
          { 'label': 'orange', 'value': 6 },
          { 'label': 'brown', 'value': 7 },
          { 'label': 'white', 'value': 8 }
        ]
      }
    ];
  }


  /*
   export interface Question {
   controlType: string;
   id: string;
   label: string;
   options?: Array<any>;
   required: boolean;
   type?: string;
   value?: any;
   }
   */


}
