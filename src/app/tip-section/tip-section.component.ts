import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tip-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tip-section.component.html',
  styleUrl: './tip-section.component.css'
})
export class TipSectionComponent {
  exclamationPointIcon = faExclamationCircle;

  @Input() content = "";
}
