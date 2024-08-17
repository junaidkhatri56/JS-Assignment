// Q1 declare a variable called age? show in alert box?...
var age = 21 ;

alert('I am ' + age + " years Old");


//Q2 show message in browser

var birthYear = 2003 ;
var heading = document.createElement('h1');
heading.textContent = 'My birth Year is ' + birthYear ;

document.body.appendChild(heading);

var heading2 = document.createElement('h2');
heading2.textContent =' Data type of my declared variable is Number ';

document.body.appendChild(heading2);



//Q3 store

var visiterName = 'Jhon Doe' ;
var productTitle = "XYZ Clothing Store" ;
var quantity = 5 ;

var heading = document.createElement('h1');
heading.textContent = visiterName + " ordered " + quantity + " T-Shirt(s) on " + productTitle ;

document.body.appendChild(heading);



