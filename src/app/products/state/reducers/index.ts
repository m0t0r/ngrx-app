import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export const productsFeatureKey = 'products';

export interface ProductsState {
  [fromPizzas.pizzasFeatureKey]: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  [fromPizzas.pizzasFeatureKey]: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state[fromPizzas.pizzasFeatureKey],
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
