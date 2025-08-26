import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { JokeService } from '@overkill-monorepo/shared/joke/data-access';
import { SharedJokeUiComponent } from '@overkill-monorepo/shared/joke/ui';
import { map } from 'rxjs';

@Component({
  selector: 'overkill-monorepo-shared-joke-feature',
  standalone: true,
  providers: [JokeService],
  imports: [CommonModule, SharedJokeUiComponent],
  templateUrl: './shared-joke-feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedJokeFeatureComponent {
  public joke = toSignal(
    inject(JokeService)
      .getJoke()
      .pipe(map(({ joke }) => joke))
  );
}
