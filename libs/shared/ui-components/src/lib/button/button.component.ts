import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'overkill-monorepo-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public label = input.required<string>();
  public classes = input<string>();

  public buttonClick = output<void>();

  public onClick(): void {
    this.buttonClick.emit();
  }
}
