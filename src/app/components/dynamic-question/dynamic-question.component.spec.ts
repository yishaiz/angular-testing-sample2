import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQuestionComponent } from './dynamic-question.component';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

 describe('DynamicQuestionComponent', () => {
  let component : DynamicQuestionComponent;
  let fixture : ComponentFixture<DynamicQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicQuestionComponent ],
      imports: [ ReactiveFormsModule ]
    });

    const fixture = TestBed.createComponent(DynamicQuestionComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return true if the form control is valid', () => {
    const formControl = new FormControl('test');
    const formGroup : FormGroup = new FormGroup({ pizza: formControl });

    component.question = { controlType: 'text', id: 'pizza', label: 'Pizza!', required: false };
    component.form = formGroup;

    expect(component.isValid).toBe(true);
  });


  it('should return true if the form control is valid', () => {
    const formControl = new FormControl('test');
    const formGroup = new FormGroup({ pizza: formControl })

    component.question = { controlType: 'text', id: 'pizza', label: 'Pizza!', required: false };
    component.form = formGroup;
    expect(component.isValid).toBe(true);
  });

});
