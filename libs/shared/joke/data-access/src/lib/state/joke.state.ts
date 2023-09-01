import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { JokeService } from '../joke.service';
import { JokeType } from '../models/joke.type';
import { JokeActions } from './joke.action';

export type JokeStateType = {
  joke: JokeType | undefined;
};

@State<JokeStateType>({
  name: 'joke',
  defaults: {
    joke: undefined,
  },
})
@Injectable()
export class JokeState {
  private readonly jokeService = inject(JokeService);

  @Selector()
  static joke(state: JokeStateType): string | undefined {
    return state.joke?.joke;
  }

  @Action(JokeActions.Fetch)
  fetch(ctx: StateContext<JokeStateType>): Observable<JokeType> {
    console.warn('JokeActions.Fetch');
    return this.jokeService.getJoke().pipe(
      tap((joke: JokeType) => {
        const state: JokeStateType = ctx.getState();
        ctx.setState({
          ...state,
          joke,
        });
      })
    );
  }
}
