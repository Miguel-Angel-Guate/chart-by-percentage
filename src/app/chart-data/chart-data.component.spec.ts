import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { By } from '@angular/platform-browser';
import { mockData } from '../../libs/interface/mockTestData';
import { ChartDataComponent } from './chart-data.component';


describe('ChartDataComponent', () => {
  let component: ChartDataComponent;
  let fixture: ComponentFixture<ChartDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ChartDataComponent,
      ],
    }).compileComponents();

    Chart.register(...registerables, ChartDataLabels);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize chart when data is set', () => {
    component.dataChart = mockData;
    fixture.detectChanges();

    expect(component.chart).toBeTruthy()
    expect(component.chart?.data.labels?.length).toEqual(
      mockData.labels.length
    );
  });

  it('should correctly render the canvas element', () => {
    const canvasElement = fixture.debugElement.query(By.css('canvas'));
    expect(canvasElement).toBeTruthy();
  });
});

