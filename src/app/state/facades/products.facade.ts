import {Injectable, inject} from '@angular/core';
import {Store, ActionsSubject, select, Action} from '@ngrx/store';
import * as ProductsActions from '../actions/products.actions';
import * as ProductsSelects from '../selectors/products.selectors';
import {filter} from 'rxjs';
import {Products} from 'src/app/interface/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacade {
  private readonly store = inject(Store);
  private readonly actions$ = inject(ActionsSubject);

  loaded$ = this.store.pipe(select(ProductsSelects.selectProductsLoaded));
  allProducts$ = this.store.pipe(select(ProductsSelects.selectAllProducts));
  selectedProducts$ = this.store.pipe(select(ProductsSelects.selectEntity));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === ProductsActions.createProduct({} as any).type
    )
  )

  loadProducts() {
    this.store.dispatch(ProductsActions.loadProducts());
  }

  saveProduct(product: Products) {
    this.store.dispatch(ProductsActions.createProduct({product}));
  }

}
