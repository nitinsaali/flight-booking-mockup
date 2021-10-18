import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsSearchResultComponent } from './flights-search-result.component';

describe('FlightsSearchResultComponent', () => {
  let component: FlightsSearchResultComponent;
  let fixture: ComponentFixture<FlightsSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
