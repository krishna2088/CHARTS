import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-charts-youtube';


  columnChart=new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Placement Graph'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        '2022',
        '2021',
        '2020',
        '2019',
        '2018'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of student'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
     {
      type: 'column',
      name: 'Total Students',
      color: '#F07923',
      data: [50, 65, 35, 55, 45]
  
    }, {
      type: 'column',
      name: 'Student Placed',
      color: '#3AF02B',
      data: [32, 46, 20, 35, 24]
  
    }
    ]

  })

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    title: {
      text: 'Student Course Assignment, 2022' 
      //align: 'left'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Brands',
      data: [{
        name: 'Basic',
        y: 25,
        sliced: true,
        selected: true
      }, {
        name: 'Accessibility',
        y: 20
      },  {
        name: 'Web Development',
        y: 15
      }, {
        name: 'Data Management',
        y: 10
      }, {
        name: 'Networking',
        y: 25
      }, {
        name: 'Other',
        y: 5
      }]
    }]
  })
}


