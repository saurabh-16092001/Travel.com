
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path:""
  },
  {
    component:LocationsComponent,
    path:"location"
  },
  {
    component:HotelsComponent,
    path:"hotel"
  },
  {
    component:FlightsComponent,
    path:"flights"
  },
  {
    component:ActivitiesComponent,
    path:"activities"
  },{
    component:NavbarComponent,
    path:"navbar"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
