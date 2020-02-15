import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordReqService {

  readonly URL;

  constructor(private http: HttpClient) {
    this.URL = 'https://biocache-ws.biodiversityatlas.at/occurrences/search?q=gelbbauchunke';
   }


   getAllRecords() {
    return this.http.get(this.URL);
   }

   getOneRecord() {
     return this.http.get('https://biocache-ws.biodiversityatlas.at/occurrences/search?q=gelbbauchunke&pageSize=1');
   }
}
