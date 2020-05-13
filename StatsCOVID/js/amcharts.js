am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chart__AmCharts", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.legend = new am4charts.Legend();
    
    chart.data = [
      {
        cas: "Décès à l'hôpital",
        nombre: 15826
      },
      {
        cas: "Hospitalisations",
        nombre: 25548
      },
      {
        cas: "Retours à domicile",
        nombre: 51371
      },
      {
        cas: "En réanimation",
        nombre: 3696
      }
    ];
    
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "nombre";
    
    series.dataFields.category = "cas";
    
    }); // end am4core.ready()