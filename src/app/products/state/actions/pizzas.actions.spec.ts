import * as fromPizzas from './pizzas.actions';

describe('Actions: Pizzas', () => {
  it('should return Load Pizzas action', () => {
    expect(fromPizzas.loadPizzas().type).toBe('[Products] Load Pizzas');
  });

  it('should return Load Pizzas Success action', () => {
    expect(fromPizzas.loadPizzasSuccess(null).type).toBe('[Products] Load Pizzas Success');
  });

  it('should return Load Pizzas Failure action', () => {
    expect(fromPizzas.loadPizzasFailure(null).type).toBe('[Products] Load Pizzas Failure');
  });
});
