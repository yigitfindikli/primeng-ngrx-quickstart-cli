import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

import * as CarActions from "../shared/app.action";
import { AppState, getCarState } from "../shared";
import { Car } from '../models/car';

@Injectable({
	providedIn: "root"
})
export class CarService {
	constructor(private store: Store<AppState>, private http: HttpClient) { }

	loadCars() {
		return this.http.get('assets/data/cars-small.json');
	}

	load() {
		this.store.dispatch(new CarActions.LoadCarBegin());
	}

	getCars() {
		return this.store.select(getCarState);
	}

	addCar(car: Car) {
		this.store.dispatch(new CarActions.AddCar(car));
	}

	updateCar(car: Car, selectedCar: Car) {
		this.store.dispatch(new CarActions.UpdateCar(car, selectedCar));
	}

	deleteCar(car: Car) {
		this.store.dispatch(new CarActions.DeleteCar(car));
	}
}