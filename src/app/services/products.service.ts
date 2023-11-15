import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  constructor(private http: HttpClient) {
    super('products');
  }

  create(body: Products) {
    return this.http.post<Products>(this.APIurl, body);
  }

  getProducts() {
    return this.http.get<Products[]>(this.APIurl);
  }
}
