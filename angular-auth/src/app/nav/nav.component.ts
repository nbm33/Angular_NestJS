import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth } from '../classes/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  auth: boolean = false;

  constructor( 
    private http: HttpClient
  ) { 

  }

  ngOnInit(): void {
    Auth.authEmitter.subscribe((authenticated) => {
      this.auth = authenticated;
    }
    )
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout',{})
      .subscribe(() => {
      });
  }


}
