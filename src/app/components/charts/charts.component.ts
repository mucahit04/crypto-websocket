import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketServiceService } from './../../services/websocket-service.service';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { retry } from 'rxjs';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  data: any;
  coinList: string[] = [
    'bitcoin',
    'ethereum',
    'dogecoin',
    'tron',
    'binance',
    'litecoin',
    'ultra',
  ];
  selectedCoin: any = 'bitcoin';
  url = `wss://ws.coincap.io/prices?assets=`;
  labels: any[] = [];
  count: number = 0;
  coinData: any[] = [];

  lineStyle: number = 0; //0 for straight lines, bigger number for some curve

  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.coinData,
        label: this.selectedCoin,
        backgroundColor: 'rgba(148,159,255,0.2)',
        borderColor: 'rgba(148,159,255,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: this.labels,
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: this.lineStyle,
      },
    },
    scales: {
      x: {},
      'y-axis-0': {
        position: 'left',
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  public lineChartType: ChartType = 'line';
  constructor(private wss: WebsocketServiceService) {}

  ngOnInit(): void {
    this.connectAndSub(this.selectedCoin);
  }

  connectAndSub(coin: string) {
    if (this.chart) {
      this.coinData = [];
      this.labels = [];
      this.chart.data!.datasets[0].label = coin;
      this.chart.data!.datasets[0].data = this.coinData;
      this.chart.data!.labels = this.labels;
      this.chart.update();
    }
    const fullUrl = this.url + coin;
    this.wss.connect(fullUrl);
    this.wss.subject?.pipe(retry()).subscribe((res: any) => {
      this.count += 1;
      const now = new Date();
      const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

      if (res) {
        if (this.coinData.length > 20) {
          this.coinData.shift();
          this.labels.shift();
        }
        this.labels.push(time);
        this.coinData.push(res[coin]);
        this.chart?.update();
      }
    });
  }

  onSelect(event: any) {
    this.wss.subject?.complete();
    this.connectAndSub(event);
  }
}
