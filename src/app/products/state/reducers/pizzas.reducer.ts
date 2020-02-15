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
  data: [
    {
      name: `Blazin' Inferno`,
      toppings: [
        {
          id: 10,
          name: 'pepperoni',
        },
        {
          id: 9,
          name: 'pepper',
        },
        {
          id: 3,
          name: 'basil',
        },
        {
          id: 4,
          name: 'chili',
        },
        {
          id: 7,
          name: 'olive',
        },
        {
          id: 2,
          name: 'bacon',
        },
      ],
      id: 1,
    },
  ],
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
