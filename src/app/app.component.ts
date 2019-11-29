import { Component, OnInit } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs';
import { CarService } from './services/carservice';

export class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) {}
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	constructor(private carService: CarService) {
		this.carService.load();
	}

	ngOnInit() {
		this.carService.getCars().subscribe(data => {
			const cars = [...data.cars];
			this.cars = cars;
		})
	}


	cars: Car[];

	cols = [
		{ field: 'vin', header: 'Vin' },
		{ field: 'year', header: 'Year' },
		{ field: 'brand', header: 'Brand' },
		{ field: 'color', header: 'Color' }
	];

	selectedCar: Car;

	newCar: boolean;

	displayDialog: boolean;

	car: Car = new PrimeCar();

	showDialogToAdd() {
		this.newCar = true;
		this.car = new PrimeCar();
		this.displayDialog = true;
	}

	onRowSelect(event) {
		this.newCar = false;
		this.car = { ...event.data };
		this.displayDialog = true;
	}

	delete() {
		if (this.selectedCar)
			this.carService.deleteCar(this.selectedCar);
		this.car = null;
		this.displayDialog = false;
	}

	save() {
		if (this.newCar) {
			this.carService.addCar(this.car);
		}
		else {
			this.carService.updateCar(this.car, this.selectedCar);
		}

		this.car = null;
		this.displayDialog = false;
	}
}
