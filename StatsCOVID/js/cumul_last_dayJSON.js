window.onload=function(){
const xmlhttp = new XMLHttpRequest(),
cumul_last_dayJSON = "http://localhost:8080/restsql/res/auto.cumul_last_day?_output=application/json",
dashbord = document.querySelector("#dashbord"),
popup = document.querySelector("#popup"),
areasDep = document.querySelectorAll("#map__dep path"),
nameList = document.querySelectorAll("#map__list_dep a");

var data;


//Method to use data from JSON
xmlhttp.open("GET", cumul_last_dayJSON, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    areasDep.forEach(function(geoID){
        fillPaths(geoID);       
    });
    nameList.forEach(function(geoID){
        listContent(geoID);       
    });
 }
 return this.data;
};


//Method to add the path ID from where the mouse is to geoID.
areasDep.forEach(function(geoID){
    geoID.addEventListener("mouseenter",function(){
        geoID = this.id.replace("FR-","");
        popupContent(geoID);
        activeArea(geoID);
    })
});
//Method to add the name ID from where the mouse is to geoID.
nameList.forEach(function(geoID){
geoID.addEventListener("mouseenter",function(){
    var geoID = this.id.replace("id-","");
    popupContent(geoID);
    activeArea(geoID);
    $(popup).css('display','block');
})
});
//Method to remove the name ID if the mouse not on the map or the list.
dashbord.addEventListener("mouseover",function(){
    activeArea();
    popupContent();
});
//Method to show a popup when mouse enter the area.
areasDep.forEach(function(geoID){
    geoID.addEventListener("mouseenter",function(){
        $(popup).css('display','block');
    })
}),
//Method to position the popup.
$(document).mousemove(function(e) {
    $(popup).css('top',125);
    $(popup).css('left',800);
});
//Method to hide the popup when leaving the area.
dashbord.addEventListener("mouseover",function(){
    $(popup).css('display','none');
});



//Method to fill the area where the mouse is over.
var activeArea = function(geoID){
dashbord.querySelectorAll(".is-active").forEach(function(geoID){
    geoID.classList.remove("is-active")
}),
void 0 !== geoID && (document.querySelector("#id-"+geoID).classList.add("is-active"),
                     document.querySelector("#FR-"+geoID).classList.add("is-active"))         
};
//Method to add content to the popup
var popupContent = function(geoID) {
var femme =-1, homme =-1;
for (i=0 ; i < data.cumul_last_days.length ; i++) {
    if (data.cumul_last_days[i].dep == geoID) {
        if (data.cumul_last_days[i].genre == "Femmes") {
            femme = i ;
        } else 
        if (data.cumul_last_days[i].genre == "Hommes") {
            homme = i;
        }
        if (homme != -1 && femme != -1) {
            break;                
        }
    }
}

var displayText = "Error";
if (homme != -1 && femme != -1) {
    var depName = data.cumul_last_days[homme].departement;
    displayText = "<h2>" + depName + "</h2>" + 
    "<div class='num green'> Guéri: " + data.cumul_last_days[homme].rad + " homme(s), "+ data.cumul_last_days[femme].rad + " femme(s)</div>" +
    "<div class='num yellow'> Hospitalisés: " + data.cumul_last_days[homme].hosp + " homme(s), "+ data.cumul_last_days[femme].hosp + " femme(s)</div>" +
    "<div class='num orange'> Réanimations: " + data.cumul_last_days[homme].rea + " homme(s), "+ data.cumul_last_days[femme].rea + " femme(s)</div>" +
    "<div class='num red'> Morts: " + data.cumul_last_days[homme].dc + " homme(s), "+ data.cumul_last_days[femme].dc + " femme(s)</div>";
}
$(popup).html(displayText);
}
//Method to fill the path
var fillPaths = function(geoID) {
    
    var geoIDsansFR = geoID.id.replace("FR-","");
    var femme =-1, homme =-1;
    for (i=0 ; i < data.cumul_last_days.length ; i++) {
        if (data.cumul_last_days[i].dep == geoIDsansFR) {
            if (data.cumul_last_days[i].genre == "Femmes") {
                femme = i ;
            } else 
            if (data.cumul_last_days[i].genre == "Hommes") {
                homme = i;
            }
            if (homme != -1 && femme != -1) {
                break;                
            }
        }
    }
    var totalDC=0;
    if (homme != -1 && femme != -1)  {
        totalDC = data.cumul_last_days[homme].dc + data.cumul_last_days[femme].dc ;
        var color;
        
        if (totalDC == 0) color = "#FFCACA";
        else if (totalDC <= 10) color = "#FFA4A4";
        else if (totalDC <= 25) color = "#FF8E8E";
        else if (totalDC <= 50) color = "#FF7171";
        else if (totalDC <= 100) color = "#FF4040";
        else if (totalDC <= 200) color = "#FF0606";
        else if (totalDC <= 400) color = "#B90000";
        else if (totalDC <= 800) color = "#6C0000";
        else color = "#330000";

        $(geoID).css('fill',color);
    } else {
        console.log("Error departement='" + geoIDsansFR+"' not found");
    }
}
//Method to content the list
var listContent = function(geoID) {
    var geoIDsansFR = geoID.id.replace("id-","");
    var depName;
    var femme =-1, homme =-1;
    for (i=0 ; i < data.cumul_last_days.length ; i++) {
        if (data.cumul_last_days[i].dep == geoIDsansFR) {
            if (data.cumul_last_days[i].genre == "Femmes") {
                femme = i ;
            } else 
            if (data.cumul_last_days[i].genre == "Hommes") {
                homme = i;
            }
            if (homme != -1 && femme != -1) {
                break;
            }
        }
    }
    var totalDC;
    if (homme != -1 && femme != -1)  {
        totalDC = data.cumul_last_days[homme].dc + data.cumul_last_days[femme].dc ;
        depName = data.cumul_last_days[homme].departement ;
    } else {
        console.log("Erreur: "+geoIDsansFR+ " not found");
    }
    
    dcText = depName + " : <em class='num red'>" + totalDC + "</em>" ;
    $(geoID).html(dcText);
}


}