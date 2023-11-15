import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {on, createReducer, Action} from '@ngrx/store';
import {Products} from 'src/app/interface/products';
import * as ProductsActions from '../actions/products.actions';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<Products> {
  loaded: boolean;
  selectedId?: string;
  error?: string | null;
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter = createEntityAdapter<Products>();

export const initialProductState: ProductsState =
  productsAdapter.getInitialState({
    loaded: false,
  });

const onFailure = (state: ProductsState, {error}: any) => ({
  ...state,
  error,
});

const _productsReducer = createReducer(
  initialProductState,
  on(ProductsActions.resetProducts, state => productsAdapter.removeAll(state)),
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, {products}) =>
    productsAdapter.setAll(products, {...state, loaded: true})
  ),
  on(ProductsActions.loadProductsFailure, onFailure),
  on(ProductsActions.createProductSuccess, (state, {product}) =>
    productsAdapter.addOne(product, state)
  ),
  on(ProductsActions.createProductFailure, onFailure)
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return _productsReducer(state, action);
}
