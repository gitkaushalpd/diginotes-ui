import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Noteslist } from 'src/app/notes-list/noteslist';
import { NoteserviceService } from 'src/app/notes-service/noteservice.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  noteList: Noteslist = {};
  noteform = this.formbuilder.group(new Noteslist());
  note: Noteslist = {};

  constructor(
    private formbuilder: FormBuilder,
    private noteService: NoteserviceService
  ) {}

  ngOnInit(): void {}

  //
  saveNotes(note: Noteslist) {
    this.noteService.saveNotes(note).subscribe((data: Noteslist) => {
      console.log(data);
      window.location.reload();
    });
  }

  // define submit method for form...
  onSubmit(): void {
    console.log(this.noteform);

    let note: any = new Noteslist();
    note = this.noteform.value;
    console.log(note);
    this.saveNotes(note);

    // form will be refreshed after add information
    this.noteform.reset();
  }
}
