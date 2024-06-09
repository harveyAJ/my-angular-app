import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-event-handling',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {
  message = "TEST MESSAGE";

  @Output() startEvent = new EventEmitter<void>();
  @Output() stopEvent = new EventEmitter<void>();
  @Output() pauseEvent = new EventEmitter<void>();

  start(message: string): void {
    this.startEvent.emit();
  }

  pause(): void {
    this.pauseEvent.emit();
  }

  stop(): void {
    this.stopEvent.emit();
  }
}
