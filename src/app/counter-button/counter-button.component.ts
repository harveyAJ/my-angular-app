import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [FontAwesomeModule,MatButtonModule],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent implements OnInit, OnDestroy {
  
  pointerIcon = faHandPointer;
  
  ngOnDestroy(): void {
    console.log('OnDestroy: Method not implemented.');
  }
  ngOnInit(): void {
    console.log('onInit: Method not implemented.');
  }
  
  @Output() incrementCounterEvent = new EventEmitter<void>();
  @Input() counter: number = 0; 

  onClick(): void {
    this.incrementCounterEvent.emit();
  }
}