import { reducer, initialState } from './pizzas.reducer';
import * as fromPizzaActions from '../actions/pizzas.actions';
import * as fromPizzas from './pizzas.reducer';
import * as fromProducts from './';

const createPizzasState = ({ data = [], loading = false, loaded = false } = {}) => ({
  data,
  loading,
  loaded,
});

const createProductsState = ({ pizzas = createPizzasState() } = {}) => ({
  pizzas,
});

const createState = ({ products = createProductsState() } = {}) => ({
  products,
});

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

describe('Selectors: Pizzas', () => {
  it('should get products state', () => {
    const state = createState();

    // expect(fromProducts.getProductsState(state)).toBe(state.products);
  });

  it('should get pizzas state', () => {
    const state = createProductsState();
    // expect(fromProducts.getPizzaState({ pizzas: {} })).toBe(state.pizzas);
  });

  it('should get all pizzas', () => {
    const state = createPizzasState();

    // expect(fromProducts.getAllPizzas(state)).toBe(state.data);
  });

  it('should get products state', () => {
    const state = createPizzasState();

    // expect(fromProducts.getPizzasLoaded(state)).toBe(state.loaded);
  });

  it('should get products state', () => {
    const state = createPizzasState();

    // expect(fromProducts.getPizzasLoading(state)).toBe(state.loading);
  });
});
