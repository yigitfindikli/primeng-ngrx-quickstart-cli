import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

import * as fromCar from "./app.reducer";

export interface AppState {
    data: fromCar.CarState;
}

export const reducers: ActionReducerMap<AppState> = {
    data: fromCar.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? []
    : [];

export const getCarState = (state: AppState) => state.data;
