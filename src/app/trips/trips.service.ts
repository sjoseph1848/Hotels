import { Injectable } from '@angular/core';
import {ITrip} from '../trips/trip.model';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TripsService {

  getTrips():Observable<ITrip[]>{
    let subject = new Subject<ITrip[]>()
    setTimeout(() => {subject.next(TRIPS);subject.complete(); }, 100)
    return subject
  }

}

const TRIPS:ITrip[] = [
  {
      id: 1,
      name: "River Trail across Nashville",
      location: "Outside",
      description: `The Cumberland River Greenway is a multi-use trail that follows the winding course of the 
      Cumberland River through downtown Nashville. 
      Most of the trail lies on the west/south bank of the river, 
      but it does cross over the Shelby Street Bridge and continues to LP Field. 
      This part of the trail is known locally as the East Bank Greenway.`

    },
    {
      id: 2,
      name: "Get Your Whiskey On",
      location: "Inside",
      description: `Your perfect Nashville day is planned from start to finish! 
      With Mint Julep, you’ll travel with an expert guide in comfortable and safe transportation. 
      We take care of the reservations, admissions, timing and itinerary so you can sit back and relax. 
      While your destinations may vary, we know that you’ll make lifelong memories you can’t wait to share.`
      
    },
    {
      id: 3,
      name: "The Country Tour of Nashville",
      location: "Inside",
      description: `Often regarded as the Hollywood of country music,
       Nashville is full of famous musicians. This tour gives you an insight into their 
      lives and allows you to check out their mansions.
      This three and a half hour tour will show you the homes of artists such as Taylor Swift, 
      Kid Rock, and Dolly Parton, and explain a little bit to you about the history of music in the city.
      You will also be treated to the beautiful architecture of some of Nashville’s most exclusive areas 
      and be steeped in the culture of the city. It has even been known for some of the stars to jump on board in the past.`
   
    },
    {
      id: 4,
      name: "Sing along",
      location: "Outside",
      description: `Located in the heart of downtown Nashville in World Famous Printers Alley,
       Ms. Kelli’s is Nashville’s premier Karaoke bar and has remained a hot spot for Music City 
       nightlife since it’s opening in 2002.`
     
    },
    {
      id: 5,
      name: "Shop til Ya Drop",
      location: "Inside",
      description: `Those seeking a bit more space go here to live, and others in Nashville who want to 
      experience different options head south to shop. 
      Stacey Rhodes women's store carries a variety of lines not 
      found elsewhere, while next door's Parlour 3 is a cosmetic junkie's haven. `
     
    }
  ]

