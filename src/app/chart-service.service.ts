import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ChartServiceData {

  constructor( private httpClient: HttpClient) {}
  getChartData() {
    return this.httpClient.get('./assets/data/dataChart.json');
  }
}
