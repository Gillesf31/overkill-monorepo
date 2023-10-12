import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JokeType } from './models/joke.type';

@Injectable()
export class JokeService {
  readonly #httpClient: HttpClient = inject(HttpClient);
  readonly #apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&type=single';

  public getJoke(): Observable<JokeType> {
    return this.#httpClient.get<JokeType>(`${this.#apiUrl}`);
  }
}
