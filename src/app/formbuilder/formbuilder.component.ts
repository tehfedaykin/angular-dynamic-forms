import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

let emailRegex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

@Component({
  selector: 'app-formbuilder',
  template: `
  <form [formGroup]="usersForm" (ngSubmit)="onSubmit()">
    <ng-container *ngFor="let userFormGroup of usersForm.controls.users.controls; let i = index">
      <div [formGroup]="userFormGroup">
        <label>
          First name:
          <input type="text" formControlName="firstName">
        </label>
        <label>
          Last name:
          <input type="text" formControlName="lastName">
        </label>
        <label>
          Email:
          <input type="text" formControlName="email">
        </label>
      </div>
    </ng-container>
    <button type="submit">console log form value</button>
  </form>
  `
})
export class FormbuilderComponent implements OnInit {
  public usersForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.usersForm = this.fb.group({
      date: this.fb.control(new Date()),
      users: this.fb.array([
        this.fb.group({
          firstName: ['user 1', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.pattern(emailRegex)]
        }),
        this.fb.group({
          firstName: ['user 2', Validators.required],
          lastName: ['', Validators.required],
          email: ['',  Validators.pattern(emailRegex)]
        })
      ])
    })
  }

  onSubmit() {
    console.log(this.usersForm.value);
  }

}
