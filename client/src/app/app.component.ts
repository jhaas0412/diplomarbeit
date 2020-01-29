import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly ROOT_URL="localhost:8080";

  posts:any;

  constructor(private http: HttpClient)
  {}

  getPosts()
  {
    this.posts=this.http.get(this.ROOT_URL);
  }
}
