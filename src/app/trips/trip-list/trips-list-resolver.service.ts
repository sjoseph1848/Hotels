import {Injectable, Inject} from '@angular/core';
import {Resolve} from '@angular/router';
import {TripsService} from '../trips.service';
import {map} from 'rxjs/operators';

@Injectable()
export class TripListResolver implements Resolve<any>{
    constructor(private tripsService:TripsService){

    }
    resolve(){
        return this.tripsService.getTrips().pipe(map(trips => trips))
    }
}