import * as fromCar from "./app.action";
import { Car } from '../models/car';

export interface CarState {
	cars: Car[];
	loading: boolean;
}

export const initialState: CarState = {
	cars: [],
	loading: false
};

export function reducer(
	state = initialState,
	action: fromCar.ActionsUnion
): CarState {
	switch (action.type) {
		case fromCar.ActionTypes.LoadCarBegin: {
			return {
				...state,
				loading: true,
			};
		}

		case fromCar.ActionTypes.LoadCarSuccess: {
			return {
				...state,
				loading: false,
				cars: action.payload.data
			};
		}

		case fromCar.ActionTypes.AddCar: {
			const items = state.cars;
			items.push(action.payload);
			return {
				...state,
				cars: items
			}
		}

		case fromCar.ActionTypes.UpdateCar: {
			const index = findSelectedCarIndex(state.cars, action.selectedCar);
			const cars = state.cars;
			cars[index] = action.payload;
			return {
				...state,
				cars:cars
			}
		}

		case fromCar.ActionTypes.DeleteCar: {
			const index = findSelectedCarIndex(state.cars ,action.payload);
			const cars = state.cars.filter((val, i) => i !== index);
			return {
				...state,
				cars:cars
			}
		}

		default: {
			return state;
		}
	}
}

function findSelectedCarIndex(cars,selectedCar): number {
	return cars.indexOf(selectedCar);
}

export const getItems = (state: CarState) => state.cars;