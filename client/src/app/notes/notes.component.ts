import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import NotesService from "../services/notes.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteService: NotesService) { }

  data:any;

  ngOnInit() {
    this.noteService.getNotes().subscribe((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
    }, (error => {
      this.data = error.message;
      console.log(error);
    }));
  }

}
