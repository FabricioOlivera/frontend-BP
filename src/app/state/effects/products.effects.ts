import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import * as ProductsActions from '../actions/products.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Products } from '../../interface/products';

@Injectable()
export class ProductsEffects {
  private readonly actions$ = inject(Actions);
  private productsService = inject(ProductsService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      exhaustMap((_) =>
        this.productsService.getProducts().pipe(
          map((products: Products[]) =>
            ProductsActions.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(ProductsActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      exhaustMap((payload) =>
        this.productsService.create(payload.product).pipe(
          map((product: Products) =>
            ProductsActions.createProductSuccess({ product })
          ),
          catchError((error) =>
            of(ProductsActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );
}
