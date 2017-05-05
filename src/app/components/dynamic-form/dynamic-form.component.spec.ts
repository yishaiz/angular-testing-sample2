import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Question } from "../../models/question.model";

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //FormGroup

  it('should create a `FormGroup` comprised of `FormControl`s', () => {
    component.ngOnInit();
    expect(component.formGroup instanceof  FormGroup).toBe(true);
  });

  //check questions => FormControl

  it('should create a `FormControl` for each question', () => {
    component.questions = [
      {
        controlType: 'text',
        id: 'first',
        label: 'My First',
        required: false
      },
      {
        controlType: 'text',
        id: 'second',
        label: 'Second!',
        required: true
      }
    ];

    component.ngOnInit();

    // debugger;

    expect(Object.keys(component.formGroup.controls)).toEqual([
      'first', 'second'
    ]);
  });
});
