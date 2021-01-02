import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { HttpClientModule } from '@angular/common/http';
import { GreetingComponent } from './greeting/greeting.component';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent, 
        TasksComponent, GreetingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, 
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}