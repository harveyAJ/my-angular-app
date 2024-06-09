import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private http: HttpClient
  ) { }

  loadData(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/')
        .pipe(
          map(x => x.results[0]),
          map(y => {
            return {
              emailAddress: y.email,
              name: y.name.first + " " + y.name.last
            }
          })
        );
  }
}