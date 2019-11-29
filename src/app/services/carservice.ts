import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }
}
