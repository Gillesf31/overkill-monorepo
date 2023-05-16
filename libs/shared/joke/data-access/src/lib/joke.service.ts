import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JokeType } from './models/joke.type';

@Injectable()
export class JokeService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&type=single';

  getJoke(): Observable<JokeType> {
    return this.httpClient.get<JokeType>(`${this.apiUrl}`);
  }
}
