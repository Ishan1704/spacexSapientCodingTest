import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchShuttleService {
  launchSubject = new Subject;
  constructor(private http: HttpClient) { }

  getSpaceShuttleDetails(status): Observable<object> {
    let launch_success = status.launch_success;
    let land_success = status.land_success;
    let launch_year = status.launch_year;
    let url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`
    return this.http.get(url);
  }

}
