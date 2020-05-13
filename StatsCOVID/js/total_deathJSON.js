const xmlhttp2 = new XMLHttpRequest();

var total_deathJSON = "http://localhost:8080/restsql/res/auto.total_death?_output=application/json";

xmlhttp2.open("GET", total_deathJSON, true);
xmlhttp2.send();
xmlhttp2.onreadystatechange = getDataDC;
var dataTotalDC , lastDeathNumber ;



function getDataDC() {
   if (this.readyState == 4 && this.status == 200) {
      dataTotalDC = JSON.parse(this.responseText);
      lastDeathNumber = dataTotalDC.donnees_par_sexes.length-1;
      setDate () ;
      setTotalDC () ;
      AreaChartProperties () ;
   }
}

function setTotalDC () {
   document.getElementById("death_number").innerHTML = dataTotalDC.donnees_par_sexes[lastDeathNumber].dc ;
}

function setDate () {
   document.getElementById("date").innerHTML = dataTotalDC.donnees_par_sexes[lastDeathNumber].jour ;
}

function AreaChartProperties () {
   var options = {
      animationEnabled: true,
      zoomEnabled: true,
      theme: "dark1",
      title:{
          text: "Evolution du cumul des décès en France"
      },
      axisX:{
          valueFormatString: "DD MMM",
          crosshair: {
              enabled: true,
              snapToDataPoint: true
          }
      },
      axisY: {
          title: "Décès",
          includeZero: false,
          valueFormatString: "00",
          crosshair: {
              enabled: true,
              snapToDataPoint: true,
          }
      },
      data: [{
          type: "area",
          xValueFormatString: "DD MMM",
          yValueFormatString: "00",
          dataPoints: []
      }]
   };
   
   for (i=0 ; i<dataTotalDC.donnees_par_sexes.length ; i++ ) {
      var x = new Date(dataTotalDC.donnees_par_sexes[i].jour) ;
      var y = dataTotalDC.donnees_par_sexes[i].dc ;
      options.data[0].dataPoints[i] = { x: x, y: y } ;
   }
   $("#AreaChart").CanvasJSChart(options);
}

function blink(ob) {
   if (ob.style.visibility == "visible" ) {
       ob.style.visibility = "hidden";
   } else {
       ob.style.visibility = "visible";
   }
}


setInterval("blink(death_number)",500);