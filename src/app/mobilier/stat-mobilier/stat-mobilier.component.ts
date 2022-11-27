import { Component, OnInit } from '@angular/core';
import {ChartData, ChartDataset, ChartOptions, ChartType} from 'chart.js';
import {MobilierService} from "../services/mobilier.service";
@Component({
  selector: 'app-stat-mobilier',
  templateUrl: './stat-mobilier.component.html',
  styleUrls: ['./stat-mobilier.component.css']
})
export class StatMobilierComponent implements OnInit {
  public barChartOptions: ChartOptions = {


    responsive: true,
  };
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
  ];
  private data: any;

  constructor(
    private service: MobilierService
  ) { }



  ngOnInit(): void {
    this.service.findStat().subscribe(r => {
      this.data = r;
     this.barChartLabels = this.data.map((d: any[]) => d[0]);
     let bdata = {data: [], label: 'mobilier vendu', } ;
     bdata.data = this.data.map((d: any[]) => d[1]);
     this.barChartData.push(bdata);
   });
  }

}
