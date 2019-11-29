import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { CarService } from "../services/carservice";
import * as CarActions from "../shared/app.action";

@Injectable()
export class CarEffects {
  constructor(private actions: Actions, private carService: CarService) {}

  @Effect()
  loadCars = this.actions.pipe(
    ofType(CarActions.ActionTypes.LoadCarBegin),
    switchMap(() => {
      return this.carService.loadCars().pipe(
        map(data => new CarActions.LoadCarSuccess(data))
      );
    })
  );
}