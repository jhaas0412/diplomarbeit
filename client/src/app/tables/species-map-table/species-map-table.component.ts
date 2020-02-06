import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SpeciesMapTableDataSource, SpeciesMapTableItem } from './species-map-table-datasource';

@Component({
  selector: 'app-species-map-table',
  templateUrl: './species-map-table.component.html',
  styleUrls: ['./species-map-table.component.css']
})
export class SpeciesMapTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<SpeciesMapTableItem>;
  dataSource: SpeciesMapTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['species', 'recordCount'];

  ngOnInit() {
    this.dataSource = new SpeciesMapTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }
}
