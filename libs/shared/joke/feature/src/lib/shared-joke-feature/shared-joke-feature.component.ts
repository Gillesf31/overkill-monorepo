import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedJokeUiComponent } from '@overkill-monorepo/shared/joke/ui';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { JokeActions, JokeService, JokeState } from '@overkill-monorepo/shared/joke/data-access';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'overkill-monorepo-shared-joke-feature',
  standalone: true,
  providers: [JokeService],
  imports: [CommonModule, SharedJokeUiComponent, HttpClientModule],
  templateUrl: './shared-joke-feature.component.html',
})
export class SharedJokeFeatureComponent implements OnInit {
  @Select(JokeState.joke) joke$!: Observable<string>;

  private readonly store: Store = inject(Store);

  ngOnInit(): void {
    this.joke$.subscribe(() => {
      console.warn('joke$');
    });
    this.store.dispatch(new JokeActions.Fetch());
  }
}
