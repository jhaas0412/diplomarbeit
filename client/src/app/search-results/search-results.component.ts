import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RecordReqService } from '../services/record-req.service';
import { Species } from '../models/Species';

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
