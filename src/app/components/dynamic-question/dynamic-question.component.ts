import { Component, Input, OnInit } from '@angular/core';
import { Question } from "../../models/question.model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() control: FormControl;
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }


  get isValid(): boolean {
    // return this.form.controls[this.question.id].valid;
    return this.control.valid;
  }
}
