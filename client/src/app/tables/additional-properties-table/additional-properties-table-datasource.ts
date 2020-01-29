import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface AdditionalPropertiesTableItem {
  description: string;
  value: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: AdditionalPropertiesTableItem[] = [
  {description: 'Datenquelle', value: 'Quell-DB:'},
  {description: 'Funddatum beginn', value: '1979-06-30'}
];

/**
 * Data source for the AdditionalPropertiesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AdditionalPropertiesTableDataSource extends DataSource<AdditionalPropertiesTableItem> {
  data: AdditionalPropertiesTableItem[] = EXAMPLE_DATA;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<AdditionalPropertiesTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data)
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.data;
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}
}
