import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/classes/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string = "";

  constructor(
    private http: HttpClient
  ) { 
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user').subscribe(
      (user: any) => {
        this.message = `Hi, ${user.first_name} ${user.last_name}`;
        Auth.authEmitter.emit(true);
      },
      () => {
        this.message = 'You are not login';
        Auth.authEmitter.emit(false);
      } 
    );
  }

}
