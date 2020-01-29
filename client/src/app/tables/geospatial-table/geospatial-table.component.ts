import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GeospatialTableDataSource, GeospatialTableItem } from './geospatial-table-datasource';

@Component({
  selector: 'app-geospatial-table',
  templateUrl: './geospatial-table.component.html',
  styleUrls: ['./geospatial-table.component.css']
})
export class GeospatialTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<GeospatialTableItem>;
  dataSource: GeospatialTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'value'];

  ngOnInit() {
    this.dataSource = new GeospatialTableDataSource();
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }
}
