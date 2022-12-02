import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.formBuilder.group({
    email: '',
    password: '',
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
    console.log(this.form.value);
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue()).subscribe(()=>this.router.navigate(['/']))

  }

}
