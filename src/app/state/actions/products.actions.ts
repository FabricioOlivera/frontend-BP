import { createAction, props } from '@ngrx/store';
import { Products } from 'src/app/interface/products';

export const resetProducts = createAction("[PRODUCTS] Reset Products");

export const loadProducts = createAction('[PRODUCTS] Load Products');

export const loadProductsSuccess = createAction(
  '[PRODUCTS] Load Products Success',
  props<{ products: Products[] }>()
);

export const loadProductsFailure = createAction(
  '[PRODUCTS] Load products Failure',
  props<{ error: any }>()
);

export const createProduct = createAction(
  '[PRODUCTS] Create Product',
  props<{ product: Products }>()
);

export const createProductSuccess = createAction(
  '[PRODUCTS] Create Product Success',
  props<{ product: Products }>()
);

export const createProductFailure = createAction(
  '[PRODUCTS] Create Product Failure',
  props<{ error: any }>()
);
