import { Component, OnInit } from '@angular/core';
import { TripsService } from '../trips.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips:any[]
  constructor(private tripsService:TripsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.trips = this.route.snapshot.data['trips'];
  }

}
