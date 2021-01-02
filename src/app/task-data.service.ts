import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tasks } from './tasksModel';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  taskUrl = "http://localhost:3000/tasks";

  getTasks = () : Observable <Tasks[]> => {
    return this.http.get<Tasks[]>(this.taskUrl);
  }

  getTaskById = (id: number) : Observable<Tasks> => {
    return this.http.get<Tasks>(this.taskUrl+"/"+id);
  }

  constructor( private http: HttpClient) { }
}
