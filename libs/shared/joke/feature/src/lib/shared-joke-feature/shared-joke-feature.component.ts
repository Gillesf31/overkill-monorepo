import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedJokeUiComponent } from '@overkill-monorepo/shared/joke/ui';
import { map, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from '@overkill-monorepo/shared/joke/data-access';

@Component({
  selector: 'overkill-monorepo-shared-joke-feature',
  standalone: true,
  providers: [JokeService],
  imports: [CommonModule, SharedJokeUiComponent, HttpClientModule],
  templateUrl: './shared-joke-feature.component.html',
})
export class SharedJokeFeatureComponent implements OnInit {
  private readonly jokeService: JokeService = inject(JokeService);

  joke$!: Observable<string>;

  ngOnInit(): void {
    this.joke$ = this.jokeService.getJoke().pipe(
      map(joke => {
        return joke.joke;
      })
    );
  }
}
