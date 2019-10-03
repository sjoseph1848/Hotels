import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { HeadlineComponent } from './home/headline/headline.component';
import { AmenitiesComponent } from './home/amenities/amenities.component';
import { InfoComponent } from './home/info/info.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeadlineComponent,
    AmenitiesComponent,
    InfoComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
