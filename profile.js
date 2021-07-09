let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

function button (event){
	alert('My favorite color is purple');
    
}

function button2 (event){
    
    alert('My favorite place is Mingus Mountain'); 
    
}

function button3 (event){
	
    alert('My favorite ritual is drinking coffee in the morning on the couch with my goldendoodle');
}

color.addEventListener('click',button);
place.addEventListener('click',button2);
ritual.addEventListener('click',button3);


