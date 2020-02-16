import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPizzaAction from '../actions';
import { of as observableOf } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { PizzasService } from '../../services';
import { Pizza } from '../../models/pizza.model';

@Injectable()
export class PizzaEffects {
  loadPizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPizzaAction.loadPizzas),
      switchMap(() =>
        this.pizzasService.getPizzas().pipe(
          map((pizzas: Pizza[]) => fromPizzaAction.loadPizzasSuccess({ pizzas })),
          catchError(error => observableOf(fromPizzaAction.loadPizzasFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private pizzasService: PizzasService) {}
}
