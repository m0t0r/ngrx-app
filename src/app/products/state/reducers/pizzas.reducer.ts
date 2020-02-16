import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Pizza } from '../../models/pizza.model';
import * as fromPizzaActions from '../actions/pizzas.actions';

export const pizzasFeatureKey = 'pizzas';

export interface PizzaState extends EntityState<Pizza> {
  selectedPizzaId: number | null;
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();

export const initialState: PizzaState = adapter.getInitialState({
  selectedPizzaId: null,
  loaded: false,
  loading: false,
});

const pizzaReducer = createReducer(
  initialState,
  on(fromPizzaActions.loadPizzas, state => ({ ...state, loading: true })),
  on(fromPizzaActions.loadPizzasSuccess, (state, { pizzas }) => {
    return adapter.addAll(pizzas, {
      ...state,
      loaded: true,
      loading: false,
    });
  }),
  on(fromPizzaActions.loadPizzasFailure, state => ({ ...state, loaded: false, loading: false })),
);

export function reducer(state: PizzaState | undefined, action: Action) {
  return pizzaReducer(state, action);
}

export const { selectAll: getPizzas } = adapter.getSelectors();
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
