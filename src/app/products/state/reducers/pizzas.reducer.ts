import { Action, createReducer, on } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';
import * as fromPizzaActions from '../actions/pizzas.actions';

export const pizzasFeatureKey = 'pizzas';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false,
};

const pizzaReducer = createReducer(
  initialState,
  on(fromPizzaActions.loadPizzas, state => ({ ...state, loading: true })),
  on(fromPizzaActions.loadPizzasSuccess, (state, { pizzas }) => ({
    ...state,
    data: pizzas,
    loaded: true,
    loading: false,
  })),
  on(fromPizzaActions.loadPizzasFailure, state => ({ ...state, loaded: false, loading: false })),
);

export function reducer(state: PizzaState | undefined, action: Action) {
  return pizzaReducer(state, action);
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
