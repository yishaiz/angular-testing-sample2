import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { DynamicQuestionComponent } from "./components/dynamic-question/dynamic-question.component";
import { ReactiveFormsModule } from "@angular/forms";

describe('AppComponent', () => {

  let component :  AppComponent;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicQuestionComponent
       ],
      imports: [ReactiveFormsModule]
    }) ;

    const fixutre = TestBed.createComponent(AppComponent);

    component=fixutre.componentInstance;

  }) ;

   it('should create the app',  () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }) ;

   it(`should have as title 'app works!'`,  () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }) ;

   it('should render title in a h1 tag',  () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }) ;
});
