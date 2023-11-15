import { Component, OnInit, inject } from '@angular/core';
import { ProductsFacade } from '../../../state/facades/products.facade';
import { Observable } from 'rxjs';
import { Products } from 'src/app/interface/products';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  private readonly productsFacade = inject(ProductsFacade);

  allProducts$: Observable<Products[]> = this.productsFacade.allProducts$;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.productsFacade.loadProducts();
    this.productsFacade.mutations$.subscribe(_ => this.reset());
  }

  reset() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsFacade.loadProducts();
  }

  addNavigate() {
    this.router.navigateByUrl('products/add');
  }
}
