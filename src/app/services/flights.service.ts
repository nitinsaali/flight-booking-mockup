import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlightsService {

  flights: any[] = [
      {
          flightId: 'F-1001',
          name: 'Air Asia',
          logo: 'air-asia.png',
          from: 'PNQ',
          to: 'BOM',
          duration: 232323,
          prices: [
              {
                  name: 'basic',
                  price: 2500,
                  seats: 3
              },
              {
                name: 'main',
                price: 3500,
                seats: 6
              },
              {
                name: 'economy',
                price: 4000,
                seats: 11
              }
          ],
         dateStart: '2021-10-19',
         dateEnd: '2021-10-21',
         timeStart: '2:30 PM',
         timeEnd: '5:30 PM', 
      },
      {
        flightId: 'F-1002',
        name: 'Air Asia',
        logo: 'air-asia.png',
        from: 'PNQ',
        to: 'DEL',
        duration: 898980,
        prices: [
            {
                name: 'basic',
                price: 2500,
                seats: 3
            },
            {
              name: 'main',
              price: 3500,
              seats: 9
            },
            {
              name: 'economy',
              price: 4000,
              seats: 14
            }
        ],
       dateStart: '2021-10-19',
       dateEnd: '2021-10-21', 
       timeStart: '4:30 PM',
       timeEnd: '9:30 PM', 
    },
    {
        flightId: 'F-1003',
        name: 'Go Air',
        logo: 'go-air.png',
        from: 'PNQ',
        to: 'DEL',
        duration: 865353,
        prices: [
            {
                name: 'basic',
                price: 2500,
                seats: 6
            },
            {
              name: 'main',
              price: 3500,
              seats: 7
            },
            {
              name: 'economy',
              price: 5000,
              seats: 12
            }
        ],
        dateStart: '2021-10-19',
        dateEnd: '2021-10-21', 
       timeStart: '2:30 PM',
       timeEnd: '5:30 PM', 
    },
    {
        flightId: 'F-1005',
        name: 'Go Air',
        logo: 'go-air.png',
        from: 'PNQ',
        to: 'HYD',
        duration: 212131,
        prices: [
            {
                name: 'basic',
                price: 2500,
                seats: 9
            },
            {
              name: 'main',
              price: 3500,
              seats: 11
            },
            {
              name: 'economy',
              price: 4000,
              seats: 19
            }
        ],
        dateStart: '2021-10-19',
         dateEnd: '2021-10-21',
       timeStart: '2:30 PM',
       timeEnd: '5:30 PM', 
    },
    {
        flightId: 'F-1007',
        name: 'Go Air',
        logo: 'air-asia.png',
        from: 'PNQ',
        to: 'HYD',
        duration: 213434,
        prices: [
            {
                name: 'basic',
                price: 2500,
                seats: 22
            },
            {
              name: 'main',
              price: 3500,
              seats: 2
            },
            {
              name: 'economy',
              price: 4000,
              seats: 6
            }
        ],
        dateStart: '2021-10-19',
        dateEnd: '2021-10-21',
       timeStart: '2:30 PM',
       timeEnd: '5:30 PM', 
    }
  ];


  searchFlights(data: any) {
    let finalResult = [];
    this.flights.map(f => {
        if(
            //below date comparison can be done efficiently using moment js unix timestamp 
            (f.dateStart === data.departDate && f.dateEnd === data.returnDate) &&
                (f.from === data.departure && f.to === data.destination) &&
                    (f.prices.find(x=> 
                        x.name == data.class && 
                        x.seats >= data.travellers &&
                        (x.price >= data.minPrice && x.price <= data.maxPrice)
                    ))

            ) {
                finalResult.push(f);
            }
    });
    return of(finalResult);
  }
}