import { Component, OnInit } from '@angular/core';
import { LaunchShuttleService } from '../launch-shuttle.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  arr = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  launchYear = 2006;
  launch_success = true;
  land_success = true;
  constructor(private launchService: LaunchShuttleService) { }

  ngOnInit(): void {
  }
  
  onClick(year: number): void {
    this.launchYear = year;
    this.launchService.launchSubject.next({
      launch_success : this.launch_success,
      launch_year: this.launchYear,
      land_success: this.land_success
    });
  }

  onSuccessLaunch(status: boolean) {
    this.launch_success = status;
    this.launchService.launchSubject.next({
      launch_success : status,
      launch_year: this.launchYear,
      land_success: this.land_success
    });
  }

  onSuccessLanding(status: boolean) {
    this.land_success = status;
    this.launchService.launchSubject.next({
      launch_success : this.launch_success,
      launch_year: this.launchYear,
      land_success: status
    });
  }
  
}
