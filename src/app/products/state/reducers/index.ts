import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export const productsFeatureKey = 'products';

export interface ProductsState {
  [fromPizzas.pizzasFeatureKey]: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  [fromPizzas.pizzasFeatureKey]: fromPizzas.reducer,
};
