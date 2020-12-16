import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Note} from '../../models/note'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, AfterViewInit {
  

  @Input() notes: Note []; 
  displayColumns: string [] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>; 

  constructor() { }

  @ViewChild(MatPaginator, null) paginator: MatPaginator;  

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes)
  }

}
