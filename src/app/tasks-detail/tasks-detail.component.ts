import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../task-data.service';

import { Tasks } from '../tasksModel';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit {

  myTasks: Tasks;
  id: number;

  constructor(private tasksData: TaskDataService, private route: ActivatedRoute) { }

  ngOnInit(){
      this.route.params.subscribe (params => {
        this.id  = +params["id"];

      this.tasksData.getTaskById(this.id).subscribe (t => (this.myTasks = t));
      });
  }

}
