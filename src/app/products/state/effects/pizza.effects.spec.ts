import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';

import { PizzaEffects } from './pizza.effects';
import { PizzasService } from '../../services';
import * as fromPizzaActions from '../actions';
import { Pizza } from '../../models/pizza.model';
import { cold, hot } from 'jasmine-marbles';

describe('PizzaEffects', () => {
  let pizzasService: PizzasService;
  let actions$: Observable<any>;
  let effects: PizzaEffects;

  const pizza1 = { name: 'Pizza 1' } as Pizza;
  const pizza2 = { name: 'Pizza 2' } as Pizza;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PizzaEffects,
        {
          provide: PizzasService,
          useValue: {
            getPizzas: jest.fn(),
          },
        },
        provideMockActions(() => actions$),
      ],
    });

    pizzasService = TestBed.get<PizzasService>(PizzasService);
    effects = TestBed.get<PizzaEffects>(PizzaEffects);
    actions$ = TestBed.get(Actions);
  });

  describe('loadPizzas$', () => {
    it('should return loadPizzasSuccess action, with the pizzas, on success', () => {
      const action = fromPizzaActions.loadPizzas();
      const completion = fromPizzaActions.loadPizzasSuccess({
        pizzas: [pizza1, pizza2],
      });

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: [pizza1, pizza2] });
      const expected = cold('--c', { c: completion });

      pizzasService.getPizzas = jest.fn(() => response);

      expect(effects.loadPizzas$).toBeObservable(expected);
    });

    it('should return loadPizzasFailure action, if the query throws', () => {
      const action = fromPizzaActions.loadPizzas();
      const error = 'Error!';
      const completion = fromPizzaActions.loadPizzasFailure({ error });

      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--c', { c: completion });
      pizzasService.getPizzas = jest.fn(() => response);

      expect(effects.loadPizzas$).toBeObservable(expected);
    });
  });
});
