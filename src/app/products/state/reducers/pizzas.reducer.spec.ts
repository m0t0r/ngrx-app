import { reducer, initialState } from './pizzas.reducer';
import * as fromPizzaActions from '../actions/pizzas.actions';

describe('Reducer: Pizzas', () => {
  describe('Load Pizzas action', () => {
    it('should toggle loading flag', () => {
      const result = reducer(initialState, fromPizzaActions.loadPizzas);

      expect(result).toEqual({ ...initialState, loading: true });
    });
  });

  describe('Load Pizzas Success action', () => {
    it('should set pizzas and toggle loaded and loading flags', () => {
      const result = reducer(initialState, fromPizzaActions.loadPizzasSuccess({ pizzas: [{ name: 'Test Pizza' }] }));

      expect(result).toEqual({ ...initialState, data: [{ name: 'Test Pizza' }], loading: false, loaded: true });
    });
  });

  describe('Load Pizzas Failure action', () => {
    it('should toggle loaded and loading flags', () => {
      const result = reducer(initialState, fromPizzaActions.loadPizzasFailure);

      expect(result).toEqual({ ...initialState, loading: false, loaded: false });
    });
  });
});
