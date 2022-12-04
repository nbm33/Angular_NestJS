import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  cls = "";
  message = "";

  form = this.formBuilder.group({
    email: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  submit(): void{
    this.http.post('http://localhost:8000/api/forgot', this.form.getRawValue()).subscribe(
      () => {
        this.cls = "success";
        this.message = "Email to recover password was sent!";
      },
      () => {
        this.cls = "danger";
        this.message = "Email does not exist";
      }
    );
  }

}
