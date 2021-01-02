import { Component, OnInit } from '@angular/core';
import { TaskData } from '../models/task-data';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {

  model: TaskData = new TaskData();

  constructor() { }

  ngOnInit(){
    console.log("Submitted a new Task of: ", this.model);
  }

}
