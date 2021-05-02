import { Component, OnInit, ChangeDetectorRef, ViewChild, Inject, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { PriceList } from '../shopping-cart/model/product';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ArrayType } from '@angular/compiler';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProductTableComponent implements OnInit {

  private productList = [];
  private priceList: PriceList[] = [];
  displayedColumns: string[] = ['id', 'name', 'cartons', 'units', 'price'];
  dataSource=[];

  constructor(
    private _shoppingService: ShoppingService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this._shoppingService.getProductData()
      .subscribe(res => this.productList.push(...res.data));
  }

  getPriceList(productId: number) {
    this._shoppingService.getPriceList(productId)
      .subscribe(res => {
        this.priceList = res.data;
        this.setTableData();
      });
  }


  setTableData() {
    this.dataSource = this.priceList;
    this.changeDetectorRefs.detectChanges();
  }
}
