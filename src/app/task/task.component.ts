import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input('taskIndex')
  index: number = 0;

  @Input()
  isLast: boolean = false;

  constructor() {}
}
