import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TaxonomyTableDataSource, TaxonomyTableItem } from './taxonomy-table-datasource';

@Component({
  selector: 'app-taxonomy-table',
  templateUrl: './taxonomy-table.component.html',
  styleUrls: ['./taxonomy-table.component.css']
})
export class TaxonomyTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<TaxonomyTableItem>;
  dataSource: TaxonomyTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'value'];

  ngOnInit() {
    this.dataSource = new TaxonomyTableDataSource();
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }
}
