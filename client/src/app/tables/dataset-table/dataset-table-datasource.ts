import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DatasetTableItem {
  description: string;
  value: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DatasetTableItem[] = [
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'}
];

/**
 * Data source for the DatasetTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DatasetTableDataSource extends DataSource<DatasetTableItem> {
  data: DatasetTableItem[] = EXAMPLE_DATA;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DatasetTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data)
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.data;
    }));
  }

  disconnect() {}
}
