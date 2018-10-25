import { UsersService, UserInterface } from './../../services/users.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Inject } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit, OnDestroy, AfterViewInit {
  private ELEMENT_DATA = [];
  displayedColumns: string[] = ['select', 'position', 'name', 'action'];
  dataSource;
  selection = new SelectionModel<UserInterface>(true, []);

  private usersSubscription: Subscription;

  dialogData: UserInterface = {
    position: null,
    name: null,
    fname: null,
    lname: null,
    phone: null,
    email: null,
    role: null,
    cname: null,
    desination: null,
    action: null
  };

  constructor(public dialog: MatDialog, private usersservice: UsersService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.ELEMENT_DATA = this.usersservice.getUsers();
    this.usersSubscription = this.usersservice.usersUpdated.subscribe(() => {
      this.ELEMENT_DATA = this.usersservice.getUsers();
    });
    this.dataSource = new MatTableDataSource<UserInterface>(this.ELEMENT_DATA);
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
      data: {
        position: this.dialogData.position,
        name: this.dialogData.name,
        fname: this.dialogData.fname,
        lname: this.dialogData.lname,
        phone: this.dialogData.phone,
        email: this.dialogData.email,
        role: this.dialogData.role,
        cname: this.dialogData.cname,
        desination: this.dialogData.desination
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogData = result;
      this.usersservice.addNewUser(this.dialogData);
      console.log(this.usersservice);
    });
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    if (this.dataSource != null) {
      this.dataSource = new MatTableDataSource<UserInterface>(this.ELEMENT_DATA);
      alert('afterviewinit')
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-overview-example-dialog.scss']
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: UserInterface) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
