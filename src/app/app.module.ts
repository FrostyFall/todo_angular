import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, TasksListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
