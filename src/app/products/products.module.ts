import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';
import * as fromProducts from './state';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducers),
    ProductsRoutingModule,
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {}
