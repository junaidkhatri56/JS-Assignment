// Q1 declare 3 variables in one statement
var myName = 'Junaid' , myAge = 21 , myEmail = 'Developerjunaidkhatri@gmail.com' ;

alert('My Name is ' + myName + '\nMy age is ' + myAge + '\nMy email is ' + myEmail );


// Q2

var rules = 'Rules For Naming JS Variables' ;

var heading = document.createElement('h1');
heading.textContent = rules ;

document.body.appendChild(heading);




var rule1 = 'numbers, $ and _. For ex: $my_1stVariable';

var heading4 = document.createElement('h4');
heading4.textContent = 'Variable Names can only contain, ' + rule1 ;

document.body.appendChild(heading4);


var rule2 = '$ or _. For ex: $name, _name or name';

var heading4 = document.createElement('h4');
heading4.textContent = 'Variable must begin with a letter, ' + rule2 ;

document.body.appendChild(heading4);


var rule3 = 'sensitive';

var heading4 = document.createElement('h4');
heading4.textContent = 'Variable name are case '+ rule3 ;

document.body.appendChild(heading4);


var rule4 = 'Keyword';

var heading4 = document.createElement('h4');
heading4.textContent = 'Variable names should not be JS '+ rule4 ;

document.body.appendChild(heading4);



