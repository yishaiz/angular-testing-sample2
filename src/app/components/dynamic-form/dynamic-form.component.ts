import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../models'
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
  // styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  date : string;

  @Input() questions : Array<Question> = [];

  formGroup : FormGroup;

  payload : string;

  constructor() {
  }

  ngOnInit() {
    this.date = this.getDate();

    // this.formGroup = this.generateForm(this.questions || []);
  }

  ngOnChanges() {
    this.formGroup = this.generateForm(this.questions || []);
    this.payload = '';
  }

  private generateForm(questions : Array<Question>) : FormGroup {
    const formControls = questions.reduce(this.generateControl, {})

    return new FormGroup(formControls);
  }

  private generateControl(controls : any, question : Question) {
    if (question.required) {
      controls[ question.id ] = new FormControl(question.value || '', Validators.required);
    }
    else {
      controls[ question.id ] = new FormControl(question.value || '');
    }

    return controls;
  }

  submit() {
    this.payload = JSON.stringify(this.formGroup.value, null, 4);
  }


  private getDate() {
    let d = new Date();
    let date = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return date;
  }
}
