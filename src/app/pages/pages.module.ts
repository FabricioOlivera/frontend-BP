import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { AddComponent } from './products/add/add.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ListComponent, AddComponent],
  imports: [CommonModule, PagesRoutingModule, ReactiveFormsModule],
})
export class PagesModule {}
