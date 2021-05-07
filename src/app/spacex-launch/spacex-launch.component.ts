import { Component, OnInit } from '@angular/core';
import { LaunchShuttleService } from '../launch-shuttle.service';
import { concatMap } from 'rxjs/operators'

@Component({
  selector: 'app-spacex-launch',
  templateUrl: './spacex-launch.component.html',
  styleUrls: ['./spacex-launch.component.css']
})
export class SpacexLaunchComponent implements OnInit {

  cards: any;
  constructor(
    private launchService: LaunchShuttleService
  ) { }
  launchDate: number;
  launch_success: boolean;
  launch_landing: boolean;



  ngOnInit(): void {
    let val = {
      launch_success: true,
      land_success: true,
      launch_year: 2020
    }
    this.launchService.getSpaceShuttleDetails(val).subscribe((res) => {
      this.cards = res;
    });

    this.launchService.launchSubject.subscribe(
      (val) => {
        this.launchService.getSpaceShuttleDetails(val).subscribe((res) => {
           this.cards = res;
        });
      })
    
  }



}
