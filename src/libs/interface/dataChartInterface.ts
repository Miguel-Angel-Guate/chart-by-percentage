export interface VerticalChartDataset {
    label: string;
    data: number[];
    backgroundColor: string;
}

export interface VerticalChartData {
    labels: string[];
    datasets: VerticalChartDataset[];
}

