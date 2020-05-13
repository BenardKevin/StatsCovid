

var depMap = document.getElementById('map__dep'),
   regMap = document.getElementById('map__region'),
   depNames = document.getElementById('map__list_dep'),
   regNames = document.getElementById('map__list_reg');
   
   //Button 1
   document.getElementById('btn__sub_division').addEventListener('click', function() {
      depMap.classList.toggle('is_visible');
      regMap.classList.toggle('is_not_visible'); 
      depNames.classList.toggle('is_visible');
      regNames.classList.toggle('is_not_visible'); 
   }, 
   false);