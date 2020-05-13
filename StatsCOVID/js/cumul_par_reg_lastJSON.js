
const xmlhttp3 = new XMLHttpRequest(),
    cumul_par_reg_lastJSON = "http://localhost:8080/restsql/res/auto.cumul_par_reg_last?_output=application/json",
    areasReg = document.querySelectorAll("#map__region path"),
    nameListReg = document.querySelectorAll("#map__list_reg a");



var dataReg;
    

//Method to use dataReg from JSON
xmlhttp3.open("GET", cumul_par_reg_lastJSON, true);
xmlhttp3.send();
xmlhttp3.onreadystatechange = getDataReg ;

function getDataReg () {
    if (this.readyState == 4 && this.status == 200) {
        dataReg = JSON.parse(this.responseText);
        areasReg.forEach(function(geoID){
            fillPaths(geoID);       
        });
        nameListReg.forEach(function(geoID){
            listContent(geoID);       
        });
    }
}


//Method to add the path ID from where the mouse is to geoID.
areasReg.forEach(function(geoID){
    geoID.addEventListener("mouseenter",function(){
        geoID = this.id.replace("FR-","");
        popupContent(geoID);
        activeArea(geoID);
    })
});
//Method to add the name ID from where the mouse is to geoID.
nameListReg.forEach(function(geoID){
    geoID.addEventListener("mouseenter",function(){
        var geoID = this.id.replace("id-","");
        activeArea(geoID);
        popupContent(geoID);
        $(popup).css('display','block');
    })
});
//Method to remove the name ID if the mouse not on the map or the list.
dashbord.addEventListener("mouseover",function(){
    activeArea();
    popupContent();
});
//Method to show a popup when mouse enter the area.
areasReg.forEach(function(geoID){
    geoID.addEventListener("mouseenter",function(){
        $(popup).css('display','block');
    })
});
//Method to position the popup.
$(document).mousemove(function() {
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
function popupContent (geoID) {
    var index = -1;
    for (i=0 ; i < dataReg.cumul_par_reg_lasts.length ; i++) {
        if (dataReg.cumul_par_reg_lasts[i].reg_id == geoID) {
            index = i;
            break;                       
        }
    }

    if (index != -1) {
        var regName = dataReg.cumul_par_reg_lasts[index].reg_nom,
            rad = dataReg.cumul_par_reg_lasts[index].rad,
            hosp = dataReg.cumul_par_reg_lasts[index].hosp,
            rea = dataReg.cumul_par_reg_lasts[index].rea,
            dc = dataReg.cumul_par_reg_lasts[index].dc;      
        var displayText = "<h2>" + regName + "</h2>" + 
        "<div class='num green'> Guéri: " + rad + "</div>" +
        "<div class='num yellow'> Hospitalisés: " + hosp + "</div>" +
        "<div class='num orange'> Réanimations: " + rea + "</div>" +
        "<div class='num red'> Morts: " + dc + "</div>";
        
        $(popup).html(displayText);
    }
}
//Method to fill the path
function fillPaths (geoID) {
    var geoIDsansFR = geoID.id.replace("FR-","");
 
    var index = -1;
    var nameReg = "Not found" ;
    for (i=0 ; i < dataReg.cumul_par_reg_lasts.length ; i++) {

        if (dataReg.cumul_par_reg_lasts[i].reg_id == geoIDsansFR) {
            index = i;
            nameReg = dataReg.cumul_par_reg_lasts[i].reg_nom;
            break;                       
        }
    }
    if (index != -1) {
        var totalDC = dataReg.cumul_par_reg_lasts[index].dc;
        var color;
        
        if (totalDC == 0) color = "#FFCACA";
        else if (totalDC <= 10) color = "#FFA4A4";
        else if (totalDC <= 25) color = "#FF8E8E";
        else if (totalDC <= 50) color = "#FF7F7F";
        else if (totalDC <= 200) color = "#FF3F3F";
        else if (totalDC <= 300) color = "#FF0000";
        else if (totalDC <= 500) color = "#C80000";
        else if (totalDC <= 1000) color = "#960000";
        else if (totalDC <= 2000) color = "#640000";
        else if (totalDC <= 5000) color = "#320000";
        else color = "#250000";

        $(geoID).css('fill',color);
    } else {
        console.log("Erreur: "+geoIDsansFR+ " not found")
    }
}

//Method to content the list
function listContent (geoID) {
    var geoIDsansFR = geoID.id.replace("id-","");
    var index = -1;
    var nameReg = "Not found" ;
    for (i=0 ; i < dataReg.cumul_par_reg_lasts.length ; i++) {

        if (dataReg.cumul_par_reg_lasts[i].reg_id == geoIDsansFR) {
            index = i;
            nameReg = dataReg.cumul_par_reg_lasts[i].reg_nom ;
            break;                       
        }
    }

    if (index != -1) {
        var totalDC = dataReg.cumul_par_reg_lasts[index].dc ;
    } else {
        console.log("Erreur: "+geoIDsansFR+ " not found")
    }
    dcTitle = "<h2>Mort</h2>" ;
    $(list_title).html(dcTitle);
    dcText = nameReg + " : <em class='num red'>" + totalDC + "</em>" ;
    $(geoID).html(dcText);
    
}