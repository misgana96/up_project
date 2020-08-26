import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Chart } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  datatableElement: DataTableDirective;

  public data = [
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
    { jobID: 'WP20XD', userName: 'Brooklyn Simmons', jobTitle: 'IT People Hires C++ Developer with Windows Experience', company: 'IT Corporation', education: 'Post Graduation, MCA', experience: '2+ Years' },
  ]

  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthChange: false,
      searching: false
    };

    //----Subscription Plan Chart



    const canvas = <HTMLCanvasElement>document.getElementById('subscriptionPlanChart');
    const ctx = canvas.getContext('2d');
    let labels = ['Silver Plan', 'Basic Plan', 'Gold Plan'];

    var one_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    one_gradient.addColorStop(0, '#7B17FB');
    one_gradient.addColorStop(0.5, "#913CFC");
    one_gradient.addColorStop(1, '#BB86FF');

    var two_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    two_gradient.addColorStop(0, '#628BF5');
    two_gradient.addColorStop(0.5, '#23A8C6');
    two_gradient.addColorStop(1, '#00B8AD');

    var three_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    three_gradient.addColorStop(0, '#4DF17B');
    three_gradient.addColorStop(0.5, '#48E983');
    three_gradient.addColorStop(1, '#547FF3');

    let colorHex = [one_gradient, two_gradient, three_gradient];


    let myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: [50, 35, 15],
          // backgroundColor: colorHex,
          backgroundColor: colorHex,
        }],
        labels: false,
        plugin: [pluginDataLabels]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        legend: {
          position: 'bottom',
          align: 'middle'
        },
        plugins: {
          datalabels: {
            color: '#fff',
            anchor: 'center',
            align: 'start',
            offset: -10,
            font: {
              weight: 'bold',
              size: '16'
            },
            formatter: (value) => {
              return value + ' %';
            }
          }
        }
      }
    })

    //---- Subscription User Chart

    var line_chart_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    line_chart_gradient.addColorStop(0, '#B640ED');
    line_chart_gradient.addColorStop(0.5, '#9585EA');
    line_chart_gradient.addColorStop(1, '#7BBCE7');


    var subscriptionUserChart = new Chart("subscriptionUserChart", {
      type: 'line',
      data: {
        labels: ['May1', 'May2', 'May3', 'May4', 'May5', 'May6', 'May7'],
        datasets: [{
          label: 'Sales',
          data: [250, 200, 320, 300, 400, 500, 450],
          backgroundColor: line_chart_gradient,

          borderColor: [
            'rgba(123, 23, 251, 0.4)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        elements: {
          line: {
            tension: 0.4
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              max: 500,
              min: 100,
              stepSize: 100,
            },
            scaleLabel: {
              display: true,
              labelString: 'Subscriptions'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }]
        }
      }
    });

  }

  ngAfterViewInit() {


    this.zone.runOutsideAngular(() => {

      am4core.useTheme(am4themes_animated);

      // Create chart
      let chart = am4core.create("chartdiv", am4charts.GaugeChart);

      // Create axis
      let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
      axis.min = 0;
      axis.max = 1;
      axis.strictMinMax = true;
      axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
      axis.renderer.grid.template.strokeOpacity = 0.3;
      axis.renderer.minGridDistance = 10000;
      axis.fontSize = 16;

      var gradient = new am4core.LinearGradient();
      gradient.stops.push({ color: am4core.color("#66D9E7") })
      gradient.stops.push({ color: am4core.color("#735FF4") })
      gradient.stops.push({ color: am4core.color("#7B18FB") })

      // Set inner radius
      chart.innerRadius = -25;
      chart.responsive.enabled = true;

      // Add ranges
      let range = axis.axisRanges.create();
      range.value = 0;
      range.endValue = .75;
      range.axisFill.fillOpacity = 1;
      range.axisFill.fill = gradient;
      range.axisFill.zIndex = - 1;

      let range2 = axis.axisRanges.create();
      range2.value = .75;
      range2.endValue = 1;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = am4core.color("#E7E7E7");
      range2.axisFill.zIndex = - 1;

      // Add hand
      var hand = chart.hands.push(new am4charts.ClockHand());
      hand.axis = axis;
      hand.innerRadius = am4core.percent(30);
      hand.fill = am4core.color("#7B17FB");
      hand.stroke = am4core.color("#7B17FB");
      hand.startWidth = 10;
      hand.pin.disabled = false;
      hand.innerRadius = am4core.percent(20);
      hand.radius = am4core.percent(70);
      hand.value = .75;


      //Label
      var label = chart.radarContainer.createChild(am4core.Label);
      label.isMeasured = true;
      label.fontSize = 14;
      label.x = am4core.percent(20);
      label.y = am4core.percent(50);
      label.text = "45 Minute Per User";
      label.fill = am4core.color("#7B17FB");
      label.align = "center";
      label.isMeasured = false;
      label.x = -60;
      label.y = -40;
      label.fullWords = true;

    });

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
