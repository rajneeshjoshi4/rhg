import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Inject } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Test user 1', action: '' },
  { position: 2, name: 'Test user 2', action: '' },
  { position: 3, name: 'Test user 3', action: '' },
  { position: 4, name: 'Test user 4', action: '' },
  { position: 5, name: 'Test user 5', action: '' },
  { position: 6, name: 'Test user 6', action: '' },
  { position: 7, name: 'Test user 7', action: '' },
  { position: 8, name: 'Test user 8', action: '' },
  { position: 9, name: 'Test user 9', action: '' },
  { position: 10, name: 'Test user 10', action: '' },
  { position: 11, name: 'Test user 11', action: '' },
  { position: 12, name: 'Test user 12', action: '' },
  { position: 13, name: 'Test user 13', action: '' },
  { position: 14, name: 'Test user 14', action: '' },
  { position: 15, name: 'Test user 15', action: '' },
  { position: 16, name: 'Test user 16', action: '' },
];


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  displayedColumns: string[] = ['select', 'position', 'name', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

  
  addUser(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-overview-example-dialog.scss']
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
