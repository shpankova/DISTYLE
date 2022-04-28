"use strict";
// Making a button for changing a style of table
var themeButton = document.getElementById('theme-button');
var style = document.getElementById('style1');


themeButton.addEventListener("click", function() {changeTheme(); });

function changeTheme() { 
  var currentTheme = style.getAttribute('href');
  
  if (currentTheme == 'css/style1.css') {
    currentTheme = 'css/style2.css';
  } else {
    currentTheme = 'css/style1.css';
  }

  style.setAttribute('href', currentTheme);
}