export interface KPI {
  title: string;
  value: string;
  subtext: string;
}

export interface ChartDataPolarity {
  name: string;
  value: number;
  color: string;
}

export interface ChartDataVector {
  name: string;
  volume: number;
  sentiment: number;
}

export interface Alert {
  id: string;
  type: 'high' | 'warning' | 'positive';
  message: string;
  score: number;
  category: string;
}
