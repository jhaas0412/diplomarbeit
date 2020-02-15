import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EventTableDataSource} from './event-table-datasource';
import { RecordReqService } from 'src/app/services/record-req.service';
import { Species } from 'src/app/models/Species';
import { ProfileTableItem } from 'src/app/models/ProfileTableItem';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<ProfileTableItem>;
  dataSource: EventTableDataSource;

  constructor(private service: RecordReqService) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'value'];
  tableData: ProfileTableItem[];

  speciesdata: any;
  species: Species;

  ngOnInit() {
    this.service.getAllRecords().subscribe((data) => {
      // console.log(data);
      this.speciesdata = data;

      this.speciesdata.occurrences.forEach(element => {
        const spec = new Species(element);
        this.species = spec;
        // console.log(spec);
      });

      this.tableData = fillTable(this.species);
      this.dataSource = new EventTableDataSource(this.tableData);
      console.log('Datasource:');
      console.log(this.dataSource);
      this.table.dataSource = this.dataSource;
    });
    this.dataSource = new EventTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
  }
}

function fillTable(species) {
  const data: ProfileTableItem[] = [];

  data.push({description: 'Aufzeichnungsdatum', value: species.eventDate});
  data.push({description: 'Datumsgenauigkeit',  value: 'Day'});

  return data;
}
