import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  showList: boolean = true;
  people = [
    {
      name: "Valentin",
      age: 35,
      hairColor: "brown"
    },
    {
      name: "Rachel",
      age: 32,
      hairColor: "brown"
    }
  ]
}
