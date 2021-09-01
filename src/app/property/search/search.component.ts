import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICountry } from '../../shared/interfaces/country';
import { PropertyService } from '../property.service';
import { ICity } from '../../shared/interfaces/city';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-search-property',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss', '../../../styles/error-styles.scss']
})
export class SearchComponent {

  countries$: Observable<ICountry[]> = this.service.loadCountries().pipe(shareReplay(1));

  cities$: Observable<ICity[]>;

  hasNoProperties: boolean;

  nizLength = 0;

  nizLengthJava = 0;

  constructor(
    private service: PropertyService,
    private router: Router) {
  }

  setCities(country: string) {
    if (country === undefined) {
      this.cities$ = new Observable<ICity[]>();
      return;
    }
    this.cities$ = this.service.loadCities(country).pipe(shareReplay(1));
  }

  // checkIfProperties(city: string) {
  //   this.service.checkProprtiesForCity(city).subscribe(resp => this.hasNoProperties = resp);
  // }

  // onSubmit(form: NgForm) {
  //   const country = form.value.country.name;
  //   let city = form.value.city.name;
  //   if (city === undefined) {
  //     city = '';
  //   }
  //   this.router.navigate([`property/show/${country}`, { city }]);
  // }

  calculate(niz: string){
    var count = 0;
    for (let i = 0; i < niz.length; i++) {
      if (!isNaN(parseInt(niz[i]))) {
        count++;
      }
    }

    this.nizLength = count;
  }
  onSubmit(form: NgForm) {
    const niz = form.value.niz;

    this.service.checkProprtiesForCity(niz).subscribe(resp => this.nizLengthJava = resp);


  }
}
