import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path: "", redirectTo:"List", pathMatch: "full"},
  {path: "List", component: TasksComponent},
  {path: "detail/:id", component: TasksDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
