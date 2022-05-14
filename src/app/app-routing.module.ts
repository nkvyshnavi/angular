import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { ItineraryListComponent } from './flight/itinerary-list/itinerary-list.component';
import { ItineraryComponent } from './flight/itinerary/itinerary.component';

const routes: Routes = [
  { path: '', component: FlightComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'itinerarylist', component: ItineraryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
