import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'overkill-monorepo-input-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-group.component.html',
})
export class InputGroupComponent {
  @Input({ required: true }) public label!: string;

  @Output() public buttonClickHandler = new EventEmitter<string>();

  public onClick(inputText: string): void {
    this.buttonClickHandler.emit(inputText);
  }
}
