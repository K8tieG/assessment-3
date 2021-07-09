console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('You submitted the form successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

function compliment(event){
	alert('You are a wonderful human');
}

img.addEventListener('mouseover',compliment);
