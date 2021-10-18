import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsSearchResultComponent } from './components/flights/flights-search-result/flights-search-result.component';
import { FlightsSearchComponent } from './components/flights/flights-search/flights-search.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'flights',
    component: FlightsSearchComponent
  },
  {
    path: 'flight-search-result',
    component: FlightsSearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
