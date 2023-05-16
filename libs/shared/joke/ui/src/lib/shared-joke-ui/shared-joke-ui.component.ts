import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'overkill-monorepo-shared-joke-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-joke-ui.component.html',
})
export class SharedJokeUiComponent {
  @Input({ required: true }) joke!: string;
}
