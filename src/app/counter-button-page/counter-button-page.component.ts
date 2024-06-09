import { Component } from '@angular/core';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CongratulationsMessageComponent } from '../congratulations-message/congratulations-message.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TipSectionComponent } from '../tip-section/tip-section.component';

@Component({
  selector: 'app-counter-button-page',
  standalone: true,
  imports: [ CommonModule, MatButtonModule, TipSectionComponent, CounterButtonComponent, CongratulationsMessageComponent ],
  templateUrl: './counter-button-page.component.html',
  styleUrl: './counter-button-page.component.css'
})
export class CounterButtonPageComponent {
  counter: number = 0;
  threshold: number = 10;
  showCounterButton: boolean = true;

  constructor(
    private router: Router
  ) {

  }

  incrementCounter(): void {
    this.counter+=1;
    if (this.counter > this.threshold){
        this.router.navigateByUrl('event-handling');
    }
  }

  toggleCounterButton(): void {
    this.showCounterButton = !this.showCounterButton;
    //console.log("Toggling button to " + this.showCounterButton)
  }
}
