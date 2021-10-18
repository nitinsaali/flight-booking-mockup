import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights-search-result',
  templateUrl: './flights-search-result.component.html',
  styleUrls: ['./flights-search-result.component.scss']
})
export class FlightsSearchResultComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<any> = new Subject<any>();
  public priceRange: FormControl = new FormControl(20000);
  public minPrice = 2000;
  public maxPrice = 20000;
  public searchCriteria;
  constructor(private router: Router, private flightsService: FlightsService) { }
  public flights = [];

  ngOnInit(): void {
    this.getFlightDetails();
    this.searchWithPriceRange();
  }

  getFlightDetails(minPrice = this.minPrice, maxPrice = this.maxPrice) {
    this.searchCriteria = JSON.parse(sessionStorage.getItem('flightSearchCriteria'));
    this.flightsService.searchFlights({...this.searchCriteria, minPrice, maxPrice})
    .pipe(
      takeUntil(this.unsubscribe),
      map(data => {
        this.flights = data;
      })
    ).subscribe();

  }

  back() {
    this.router.navigate(['']);
  }

  searchWithPriceRange() {
    this.priceRange.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      ).subscribe(value => {
        this.getFlightDetails(this.minPrice, value);
    });
  }

  handleChange(e) {
    const modified = this.manipulateArr();
    switch (e.target.value) {
      case 'ATOZ':
          this.flights.sort((a,b) => 0 - (a.name > b.name ? -1 : 1));
          break;
      case 'ZTOA':
          this.flights.sort((a,b) => 0 - (a.name > b.name ? 1 : -1));
          break;
      case 'LTOH':
          this.flights = modified.sort((a,b) => 0 - (a.price > b.price ? -1 : 1));
          break;
      case 'HTOL':
          this.flights = modified.sort((a,b) => 0 - (a.price > b.price ? 1 : -1));
        break;
      case 'STOL':
        this.flights.sort((a,b) => 0 - (a.duration > b.duration ? -1 : 1));
        break;
      case 'LTOS':
          this.flights.sort((a,b) => 0 - (a.duration > b.duration ? 1 : -1));
        break;
      default:
        this.flights.sort((a,b) => 0 - (a.name > b.name ? -1 : 1));
        break;
    }
  }

  manipulateArr() {
    const modified = this.flights.map(k => {
      const v = (k.prices).filter(m=> m.name === this.searchCriteria['class']);
      const price = { price: v[0]['price'] };
      return {...k, ...price};
    })
    return modified;
  }


  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
