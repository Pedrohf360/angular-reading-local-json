import { Component, OnInit } from '@angular/core';
import * as products from '../../src/files/italo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'json-file';
  dados: any = [];

  ngOnInit() {
    this.dados = products['contents'];
    // [{ name: 'peedro', age: 32 }, { name: 'tiago', age: 23 }];
  }
}
