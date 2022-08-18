import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  tasks = [
    { title: 'labore numquam voluptatum temporibus veniam. Ea, officiis?' },
    { title: 'Quasi at ducimus impedit vel' },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at ducimus impedit vel reiciendis minus ipsa quod, officiis ut, perspiciatis accusantium quidem incidunt labore numquam voluptatum temporibus veniam. Ea, officiis?',
    },
  ];
  constructor() {}
}
