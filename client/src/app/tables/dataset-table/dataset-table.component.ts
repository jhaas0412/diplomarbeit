import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DatasetTableDataSource, DatasetTableItem } from './dataset-table-datasource';

@Component({
  selector: 'app-dataset-table',
  templateUrl: './dataset-table.component.html',
  styleUrls: ['./dataset-table.component.css']
})
export class DatasetTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<DatasetTableItem>;
  dataSource: DatasetTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'value'];

  ngOnInit() {
    this.dataSource = new DatasetTableDataSource();
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }
}
