// METHODE JQUERY
// $(document).ready(function(){
//   $(".dropdown-menu").hide();
//   $('.dropdown-toggle').click(function() {
//     $(".dropdown-menu").toggle();
//
//   });
// });

// METHODE JS

// OUVERTURE MODAL APPS GOOGLE
function dropdownAction() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

// OUVERTURE MODAL NOTIF
function dropdownNotif() {
  document.getElementById("notification").classList.toggle("show");
}

function dropdownAccount() {
  document.getElementById("compte").classList.toggle("show");
}

// FERMETURE
window.onclick = function(event) {
  if (!event.target.matches(".dropdown-toggle")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}









// RECHERCHE GOOGLE
function getVariable(){
  var variable = document.getElementById('search').value;
  window.location.href = "https://www.google.fr/#q=" + variable;

};
