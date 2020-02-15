import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DatasetTableDataSource} from './dataset-table-datasource';
import { ProfileTableItem } from 'src/app/models/ProfileTableItem';
import { Species } from 'src/app/models/Species';
import { RecordReqService } from 'src/app/services/record-req.service';

@Component({
  selector: 'app-dataset-table',
  templateUrl: './dataset-table.component.html',
  styleUrls: ['./dataset-table.component.css']
})
export class DatasetTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<ProfileTableItem>;
  dataSource: DatasetTableDataSource;
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
      this.dataSource = new DatasetTableDataSource(this.tableData);
      console.log('Datasource:');
      console.log(this.dataSource);
      this.table.dataSource = this.dataSource;
    });
    this.dataSource = new DatasetTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
  }
}

function fillTable(species) {
  const data: ProfileTableItem[] = [];

  data.push({description: 'Datenpartner', value: species.eventDate});
  data.push({description: 'Datenressource',  value: species.dataResourceUid});
  data.push({description: 'Vorkommens-ID',  value: species.occurrenceId});
  data.push({description: 'Beobachter',  value: 'Day'});
  data.push({description: 'Basis der Aufzeicnnung',  value: 'Day'});
  data.push({description: 'Vorkommensstatus',  value: 'Day'});

  return data;
}
