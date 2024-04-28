import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { VerticalChartData } from '../../libs/interface/dataChartInterface';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'chart-data-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-data.component.html',
  styleUrl: './chart-data.component.scss'
})
export class ChartDataComponent {

  @ViewChild('verticalChart') verticalChart!: ElementRef<HTMLCanvasElement>;
  private _dataChart!: VerticalChartData;
  chart: Chart | null = null;

  @Input() set dataChart(data: VerticalChartData) {
    this._dataChart = data;
    if (this.verticalChart) {
      this.setUpChart();
    }
  }

  get dataChart(): VerticalChartData {
    return this._dataChart;
  }

  ngAfterViewInit(): void {
    Chart.register(...registerables, ChartDataLabels);
    if (this._dataChart) {
      this.setUpChart();
    }
  }

  private setUpChart(): void {
    if (this._dataChart) {
      this.initializeChart(this._dataChart);
    }
  }

  private initializeChart(data: VerticalChartData): void {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.verticalChart.nativeElement, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: data.datasets.map(dataset => ({
          ...dataset,
          categoryPercentage: 0.7,
          barPercentage: 1
        })),
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            color: 'black',
            anchor: 'end',
            align: 'top',
            formatter: (value, context) => {
              return `${value}%`;
            },
          },
          legend: {
            position: 'bottom',
            align: 'start',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            border: {
              dash: [5, 5],
            },
            grid: {
              color: '#E7E7EE',
              lineWidth: 2,
            },
            ticks: {
              stepSize: 25,
              callback: function (value, index, values) {
                return value;
              },
            },
            max: 100,
          },
          x: {
            grid: {
              drawOnChartArea: false,
              drawTicks: true,
            },
          },
        },
      },
    });
  }

}
