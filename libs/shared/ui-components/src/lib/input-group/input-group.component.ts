import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'overkill-monorepo-input-group',
  imports: [CommonModule],
  templateUrl: './input-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputGroupComponent {
  public label = input.required<string>();

  public buttonClickHandler = output<string>();

  public onClick(inputText: string): void {
    this.buttonClickHandler.emit(inputText);
  }
}
