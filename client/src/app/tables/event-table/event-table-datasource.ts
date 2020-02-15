import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { RecordReqService } from 'src/app/services/record-req.service';
import { Species } from 'src/app/models/Species';
import { ProfileTableItem } from 'src/app/models/ProfileTableItem';


// TODO: replace this with real data from your application
const EXAMPLE_DATA: ProfileTableItem[] = [
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'},
  {description: 'Data partner', value: 'Hydrogen'}
];


/**
 * Data source for the EventTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EventTableDataSource extends DataSource<ProfileTableItem> {
  data: ProfileTableItem[] = EXAMPLE_DATA;
  tabledata: ProfileTableItem[];

  speciesdata: any;
  species: Species;

  constructor(private tableData: ProfileTableItem[]) {
    super();
    this.tableData = tableData;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ProfileTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.

    const dataMutations = [
      observableOf(this.tableData)
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.tableData;
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}
}
