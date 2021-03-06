import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { HeadlineComponent } from './home/headline/headline.component';
import { AmenitiesComponent } from './home/amenities/amenities.component';
import { InfoComponent } from './home/info/info.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about/about.component';
import { AboutHeadlineComponent } from './about/about-headline/about-headline.component';
import { AboutTestimonialsComponent } from './about/about-testimonials/about-testimonials.component';
import { TripDetailsComponent } from './trips/trip-details/trip-details.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TripThumbnailComponent } from './trips/trip-thumbnail/trip-thumbnail.component';
import {TripListResolver} from '../app/trips/trip-list/trips-list-resolver.service';
import { TripsService } from './trips/trips.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeadlineComponent,
    AmenitiesComponent,
    InfoComponent,
    FooterComponent,
    AboutComponent,
    AboutHeadlineComponent,
    AboutTestimonialsComponent,
    TripDetailsComponent,
    TripListComponent,
    TripThumbnailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFontAwesomeModule,
  ],
  providers: [TripsService,TripListResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
