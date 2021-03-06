import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
import { PeriodicElement } from 'src/models/periodic-element.model';
import { PeriodicService } from './services/periodic.service';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomPaginator } from 'src/models/CustomPaginator';
import { Router, Event, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: MatPaginatorIntl, useValue: CustomPaginator()}
  ]
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  elementsDataList: PeriodicElement[];
  selection = new SelectionModel<PeriodicElement>(true, []);
  showProgressbar = false;

  constructor(private periodicService: PeriodicService, private router: Router,
              private loadingBarService: LoadingBarService) {
    // load the data
    this.loadElementData();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.elementsDataList);

    // show progress bar
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showProgressbar = true;
      } else if (event instanceof NavigationCancel ||
                 event instanceof NavigationError ||
                 event instanceof NavigationEnd) {
        this.showProgressbar = false;

      }
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  loadElementData() {
    this.loadingBarService.start();
    this.periodicService.fetchPeriodicElements().subscribe((res: PeriodicElement[]) => {
      this.elementsDataList = res;
      this.loadingBarService.complete();
    },
    err => {
      this.loadingBarService.stop();
    });
  }

}
