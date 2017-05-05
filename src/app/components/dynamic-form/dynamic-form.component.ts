import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../models'
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  date: string;

  @Input() questions: Array<Question>;

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.date = this.getDate();

    this.formGroup = this.generateForm(this.questions);
  }

  private getDate() {
    let d    = new Date();
    let date = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return date;
  }

  private generateForm(questions: Array<Question>): FormGroup {
    return new FormGroup({});
  }
}
