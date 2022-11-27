import { Component, OnInit, ViewChild } from '@angular/core';

import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';
import { AnnonceService } from 'src/app/service/annonce.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-stat-annonce',
  templateUrl: './stat-annonce.component.html',
  styleUrls: ['./stat-annonce.component.css']
})
export class StatAnnonceComponent implements OnInit  {
  AB:number;
  ANB:number;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  
  
  constructor(public annonceService:AnnonceService) {
  
  
    
    
    

  }
  ngOnInit(): void {

    
this.annonceService.AnnonceBooster().subscribe(data=>{
  this.annonceService.AnnonceNonBooster().subscribe(data1=>{
  this.chartOptions = {
    series:[data,data1],
    chart: {
      width: 380,
      type: "pie"
    },
    labels:["Annonce booster","Annonce Non booster"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

})
})



    
  }
}


