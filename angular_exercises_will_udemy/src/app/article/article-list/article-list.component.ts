import { DataService } from '../data.service';
import { Component, OnInit, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy, OnChanges {

  data: Array<any>;

  datasvc: DataService;
  constructor(datasvc: DataService) {
    this.datasvc = datasvc;
  }

  doDelete(item) {
    //console.log(this.data);
    this.data = this.data.filter((v) => {
      //console.log(v!==item);
      return v !== item;
    })
  }

  ngOnInit(): void {
    this.datasvc.run();
    this.data = this.datasvc.data;
  }

  ngOnDestroy(): void { }

  ngOnChanges(changes: SimpleChanges): void { }
}
