import { Action } from "@ngrx/store";

export enum ActionTypes {
	LoadCarBegin = "[Car] Load car begin",
	LoadCarSuccess = "[Car] Load car success",
	AddCar = "[Car] Add",
	UpdateCar = "[Car] Update",
	DeleteCar = "[Car] Delete"
}

export class LoadCarBegin implements Action {
	readonly type = ActionTypes.LoadCarBegin;
}

export class LoadCarSuccess implements Action {
	readonly type = ActionTypes.LoadCarSuccess;

	constructor(public payload) { }
}

export class AddCar implements Action {
	readonly type = ActionTypes.AddCar;
	constructor(public payload) { }
}

export class UpdateCar implements Action {
	readonly type = ActionTypes.UpdateCar;
	constructor(public payload, public selectedCar){}
}

export class DeleteCar implements Action {
	readonly type = ActionTypes.DeleteCar;
	constructor(public payload) {}
}

export type ActionsUnion = LoadCarBegin | LoadCarSuccess | AddCar | UpdateCar | DeleteCar;