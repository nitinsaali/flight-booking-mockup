import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkControl } from 'src/app/helpers/helpers';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss']
})
export class FlightsSearchComponent implements OnInit {
  public form: FormGroup;
  public locations = [
    {
      id: 'PNQ',
      name: 'Pune'
    },
    {
      id: 'BOM',
      name: 'Mumbai'
    },
    {
      id: 'DEL',
      name: 'Delhi'
    },
    {
      id: 'HYD',
      name: 'Hyderabad'
    }
  ];

  public stdClass = [
    {
      id: 'economy',
      name: 'Economy'
    },
    {
      id: 'basic',
      name: 'Basic'
    },
    {
      id: 'main',
      name: 'Main'
    }
  ];
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    const searchCriteria = JSON.parse(sessionStorage.getItem('flightSearchCriteria'));

    if(searchCriteria) {
      checkControl(this.formControl.departure, searchCriteria['departure']);
      checkControl(this.formControl.departDate, searchCriteria['departDate']);
      checkControl(this.formControl.destination, searchCriteria['destination']);
      checkControl(this.formControl.returnDate, searchCriteria['returnDate']);
      checkControl(this.formControl.travellers, searchCriteria['travellers']);
      checkControl(this.formControl.class, searchCriteria['class']);
    }
    
  }

  buildForm() {
    this.form = this.fb.group({
      departure: ['', [Validators.required]],
      departDate: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      returnDate: ['', [Validators.required]],
      travellers: ['', [Validators.required]],
      class: ['', [Validators.required]],
    });
  }
  searchFlights() {
    const flightSearchCriteria = JSON.stringify(this.form.value);
    sessionStorage.setItem('flightSearchCriteria', flightSearchCriteria);
    this.router.navigate(['flight-search-result']);
  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
