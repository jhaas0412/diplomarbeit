import { Component, OnInit } from '@angular/core';
import { RecordReqService } from '../services/record-req.service';
import { Species } from '../models/Species';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: RecordReqService, private router: Router) { }

  data: any;
  speciesList: Species[] = [];

  ngOnInit() {
    this.service.getOneRecord().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.data.occurrences.forEach(element => {
        const spec = new Species(element);
        this.speciesList.push(spec);
        console.log(spec);

        this.speciesList.forEach(el => {
          console.log(el.decimalLatitude);

        });
    });
    });
  }

  public searchEvent(searched) {
    // foreach element alle variablen durchgehen und schauen ob sie diesen wert irgendwo beinhalten (achtung großkleinschreibung)
    console.log('Es wurde gesucht:' + searched);
    this.router.navigate(['/searchResults', searched]);
  }

}

