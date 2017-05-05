import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQuestionComponent } from './dynamic-question.component';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Question } from '../../models';
describe('DynamicQuestionComponent', () => {
  let component: DynamicQuestionComponent;
  let fixture: ComponentFixture<DynamicQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicQuestionComponent ],
      imports: [ ReactiveFormsModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(DynamicQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if the form control is valid', () => {
    const formControl = new FormControl('test');

    component.control = formControl;
    expect(component.isValid).toBe(true);
  });
});
