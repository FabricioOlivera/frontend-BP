import { ActionReducerMap } from '@ngrx/store';
import * as fromProducts from './state/reducers/products.reducers';

export interface AppState {
  [fromProducts.PRODUCTS_FEATURE_KEY]: fromProducts.ProductsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromProducts.PRODUCTS_FEATURE_KEY]: fromProducts.productsReducer,
};
