import { Injectable } from '@angular/core';
import { Noteslist } from 'src/app/notes-list/noteslist';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteserviceService {
  constructor(private http: HttpClient) {}

  // define a method to save all Users ....
  saveNotes(text: Noteslist) {
    const httpHeaders = new HttpHeaders();
    return this.http.post<Noteslist>('http://localhost:8080/saveNotes', text, {
      headers: httpHeaders,
    });
  }
}
