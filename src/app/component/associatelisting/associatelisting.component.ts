
import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';

import { Store } from '@ngrx/store';
import { getassociatelist } from '../../Store/Associate/Associate.Selectors';
import { Associates } from '../../Store/Model/Associate.model';
import { deleteeassociate, getassociate, loadassociate, openpopup } from '../../Store/Associate/Associate.Action';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-associatelisting',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './associatelisting.component.html',
  styleUrl: './associatelisting.component.css'
})
export class AssociatelistingComponent implements OnInit {
  Associatelist!: Associates[];
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColums: string[] = ["code", "name", "email", "phone", "address", "type", "group", "status", "action"]
  constructor(private dialog: MatDialog,private store:Store) { }
  

  ngOnInit(): void {
    this.store.dispatch(loadassociate());
    this.store.select(getassociatelist).subscribe(item => {
      this.Associatelist = item;
      this.datasource = new MatTableDataSource<Associates>(this.Associatelist);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    })
  }
  
  FunctionAdd() {
    this.OpenPopup(0, 'Create Associate');
  }
  FunctionEdit(code: number) {
    this.OpenPopup(code, 'Update Associate');
    this.store.dispatch(getassociate({ id: code }))
  }

  FunctionDelete(code: number) {
    if (confirm('do you want to remove?')) {
      this.store.dispatch(deleteeassociate({ code: code }));
    }
  }

  OpenPopup(code: number, title: string) {
    this.store.dispatch(openpopup());
    this.dialog.open(AddassociateComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })

  }

}