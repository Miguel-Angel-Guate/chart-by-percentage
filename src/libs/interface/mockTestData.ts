import { VerticalChartData } from "./dataChartInterface";


export const mockData: VerticalChartData = {
    labels: ["TOTAL", "36", "38", "40", "42", "44"],
    datasets: [
        {
            label: "Venta (%)",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "#0D2E1B"
        },
        {
            label: "Compra (%)",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "#2C995A"
        },
        {
            label: "Eficacia (%)",
            data: [25, 20, 60, 95, 56, 55, 40],
            backgroundColor: "#ABD6BD"
        }
    ]
};

