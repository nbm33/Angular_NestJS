import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = this.formBuilder.group({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: '',

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
    this.http.post('http://localhost:8000/api/register', this.form.getRawValue()).subscribe(()=>this.router.navigate(['/login']))

  }

}
