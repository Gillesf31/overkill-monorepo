import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'overkill-monorepo-shared-joke-ui',
  imports: [CommonModule],
  templateUrl: './shared-joke-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedJokeUiComponent {
  public joke = input.required<string>();
}
