import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Products } from '../../interface/products';
import {
  PRODUCTS_FEATURE_KEY,
  ProductsState,
  productsAdapter,
} from '../reducers/products.reducers';

export const selectProductsState =
  createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY);

const { selectAll, selectEntities } = productsAdapter.getSelectors();

export const selectProductsLoaded = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loaded
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => selectAll(state)
);

export const selectProductsEntities = createSelector(
  selectProductsState,
  (state: ProductsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectProductsState,
  (state: ProductsState) => state.selectedId
);

const emptyProduct: Products = {
  id: '',
  name: '',
  logo: '',
  description: '',
  date_revision: null,
  date_release: null,
};

export const selectEntity = createSelector(
  selectProductsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : emptyProduct)
);
