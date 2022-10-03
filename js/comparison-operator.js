var pass =50 ;
var score =90;
var hasPassed =score>= pass;
var el =document.getElementsByTagName('answer');
el.textContent = 'Level passed :'+hasPassed;