import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Note} from '../../models/note'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  

  @Input() notes: Note []; 
  displayColumns: string [] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>; 

  constructor() { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource<Note>(this.notes)
  }

}
