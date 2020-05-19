import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  readonly baseURL = environment.apiUrl;

  constructor(
    private http: HttpClient) {
  }

  getStandingsList(contestId, from, count, showUnofficial) {
    return this.http.get(this.baseURL + 'contest.standings', {
      params: {
        contestId,
        from,
        count,
        showUnofficial,
      }
    });
  }

  getUserInfo(userHandles) {
    return this.http.get(this.baseURL + 'user.info', {
      params: {
        handles: userHandles
      }
    });
  }
}
