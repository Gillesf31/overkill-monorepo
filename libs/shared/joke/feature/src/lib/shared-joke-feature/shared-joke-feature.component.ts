import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedJokeUiComponent } from '@overkill-monorepo/shared/joke/ui';
import { map, Observable } from 'rxjs';
import { JokeService } from '@overkill-monorepo/shared/joke/data-access';

@Component({
  selector: 'overkill-monorepo-shared-joke-feature',
  standalone: true,
  providers: [JokeService],
  imports: [CommonModule, SharedJokeUiComponent],
  templateUrl: './shared-joke-feature.component.html',
})
export class SharedJokeFeatureComponent implements OnInit {
  public joke$!: Observable<string>;
  readonly #jokeService: JokeService = inject(JokeService);

  public ngOnInit(): void {
    this.joke$ = this.#jokeService.getJoke().pipe(
      map(joke => {
        return joke.joke;
      })
    );
  }
}
