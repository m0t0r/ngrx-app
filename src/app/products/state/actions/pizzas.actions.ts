import { createAction, props } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export const loadPizzas = createAction('[Products] Load Pizzas');

export const loadPizzasSuccess = createAction('[Products] Load Pizzas Success', props<{ pizzas: Pizza[] }>());

export const loadPizzasFailure = createAction('[Products] Load Pizzas Failure', props<{ error: any }>());
