import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasksModel'
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Tasks[];
  dataService: TaskDataService;

  constructor(private tasksData: TaskDataService) {
    this.tasksData.getTasks().subscribe(t => (this.tasks = t));
   }

  ngOnInit(): void {
  }

}
