import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartDataComponent } from './chart-data/chart-data.component';
import { CommonModule } from '@angular/common';

import { VerticalChartData } from '../libs/interface/dataChartInterface';
import { ChartServiceData } from './chart-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartDataComponent, CommonModule, HttpClientModule],
  providers: [ChartServiceData],
  templateUrl: './app.component.html',

  styleUrl: './app.component.scss'
})
export class AppComponent {
  dataChart!: VerticalChartData;

  constructor(private chartService: ChartServiceData) {
    this.chartService.getChartData().subscribe((data) => {
      console.log("🚀 ~ AppComponent ~ this.chartService.getChartData ~ data:", data)
      this.dataChart = data as VerticalChartData;
    });
  }

}
