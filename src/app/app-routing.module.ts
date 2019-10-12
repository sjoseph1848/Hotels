import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { TripDetailsComponent } from './trips/trip-details/trip-details.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TripListResolver } from './trips/trip-list/trips-list-resolver.service';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'about', component:AboutComponent},
  {path:'trips',component:TripListComponent, resolve:{trips:TripListResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
