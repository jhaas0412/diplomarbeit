import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";

@Injectable()
export default class NotesService {
  constructor(private httpClient: HttpClient) {
  }
  public getNotes():Observable<object> {
    return this.httpClient.get("http://localhost:8080/server-0.1/");
  }
}
