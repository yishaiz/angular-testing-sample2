import { Component, Input, OnInit } from '@angular/core';
import { Question } from "../../models/question.model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html'
  // styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent implements OnInit {
  date : string;

  @Input() form : FormGroup;
  @Input() question : Question;
  // @Input() control: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.date = this.getDate();
  }

  get isValid() : boolean {
    return this.form.controls[ this.question.id ].valid;
    // return this.control.valid;
  }

  private getDate() {
    let d = new Date();
    let date = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return date;
  }

}

