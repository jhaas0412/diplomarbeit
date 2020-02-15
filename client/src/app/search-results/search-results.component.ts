import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RecordReqService } from '../services/record-req.service';
import { Species } from '../models/Species';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: RecordReqService) { }
  data: any;
  speciesList: Species[] = [];
  searched: any;

  // Pagination
  pageIndex:number = 0;
  pageSize:number = 6;
  lowValue:number = 0;
  highValue:number = 7;

  getPaginatorData(event) {
    console.log(event);
     if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
       }
    else if(event.pageIndex === this.pageIndex - 1){
       this.lowValue = this.lowValue - this.pageSize;
       this.highValue =  this.highValue - this.pageSize;
      }
       this.pageIndex = event.pageIndex;

  }


  ngOnInit() {
    const searched = this.route.snapshot.paramMap.get('searched');
    console.log('Gesucht:' + searched);
    this.searched = searched;
    this.service.getAllRecords().subscribe((data) => {
      // console.log(data);
      this.data = data;

      this.data.occurrences.forEach(element => {
        const spec = new Species(element);
        this.speciesList.push(spec);
        // console.log(spec);
      });

    });
  }
}
