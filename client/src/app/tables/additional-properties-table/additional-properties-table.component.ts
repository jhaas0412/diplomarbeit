import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AdditionalPropertiesTableDataSource, AdditionalPropertiesTableItem } from './additional-properties-table-datasource';

@Component({
  selector: 'app-additional-properties-table',
  templateUrl: './additional-properties-table.component.html',
  styleUrls: ['./additional-properties-table.component.css']
})
export class AdditionalPropertiesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<AdditionalPropertiesTableItem>;
  dataSource: AdditionalPropertiesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'value'];

  ngOnInit() {
    this.dataSource = new AdditionalPropertiesTableDataSource();
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }
}
