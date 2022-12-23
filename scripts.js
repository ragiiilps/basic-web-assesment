//------PRODUCT

const newData = []


const data = {
	"product": [{
			"name": "PHILLIP LEYESA X NMD S1 SHOES",
			"brand": "Adidas",
            "description": "MULTICOLOR/MULTICOLOR/MULTICOLOR [FZ5830]",
			"price": "4.000.000",
			"image": "./assets/s1.webp"

		},
		{
			"name": "ADIZERO PRIME X STRUNG",
			"brand": "Adidas",
            "description": "iphone 11MULTICOLOR/BLACK/MULTICOLOR [HQ3781]",
			"price": "4.300.000",
            "image": "./assets/s2.webp"
		},
		{
			"name": "ADIZERO PRIME X",
			"brand": "Adidas",
            " description": "GREEN/BLACK/MULTICOLOR [GV7074]",
			"price": "4.300.000",
            "image": "./assets/s3.webp"
		},
		{
			"name": "ULTRA 4D SHOES SPORTSWEAR",
			"brand": "Adidas",
            " description": "BLACK/MULTICOLOR/MULTICOLOR [GY5913]",
			"price": "4.000.000",
            "image": "./assets/s4.webp"
		},
		{
			"name": "4D FWD X PARLEY SHOES",
			"brand": "Adidas",
            " description": "WHITE/BLACK/MULTICOLOR [GZ8625]",
			"price": "4.000.000",
            "image": "./assets/s5.webp"
		},
		{
			"name": "ADIDAS 4D FUTURECRAFT",
			"brand": "Adidas",
            " description": "WHITE/WHITE/BLACK [Q46229",
			"price": "4.000.000",
            "image": "./assets/s6.webp"
		},
		{
			"name": "ULTRABOOST 5.0 DNA RUNNING",
			"brand": "Adidas",
            " description": "MULTICOLOR/MULTICOLOR/WHITE [GV8734]",
			"price": "3.300.000",
            "image": "./assets/s7.webp"
		},
		{
			"name": "ULTRABOOST 22 LIFESTYLE",
			"brand": "Adidas",
            " description": "BLUE/BLUE/BLACK [GX5461]",
			"price": "3.150.000",
            "image": "./assets/s8.webp"
		}
	]
}

for(let i=0; i< data.product.length;i++){
        document.getElementsByClassName("p-name")[i].innerHTML = data.product[i].name
        document.getElementsByClassName("p-price")[i].innerHTML ="Rp." + data.product[i].price
        document.getElementsByClassName("img-product")[i].src = data.product[i].image
}
// const name = document.querySelectorAll(".p-name")[0].innerHTML

function addData(n){
	const name =  document.getElementsByClassName("p-name")[n].innerHTML
	const price = document.getElementsByClassName("p-price")[n].innerHTML
	const src = document.getElementsByClassName("img-product")[n].src
	// console.log(src)
	
	const newProduct = {
		"product" : [{
			"name" : name,
			"price": price, 
			"src":src
		}]
	}

	newData.push(newProduct)

	const container = document.getElementById("modal-content")
	const col = document.createElement("div")
	col.classList.add("inside-modal")
	

	const content = container.appendChild(col)
	
	const image = document.createElement('img')
	const nameTag = document.createElement('h4')
	const priceTag = document.createElement('p')

	nameTag.classList.add('p-name')
	priceTag.classList.add('p-price')
	
	for(let i=0;i<newProduct.product.length;i++){
		image.setAttribute("src", newProduct.product[i].src)
		nameTag.innerHTML = newProduct.product[i].name
		priceTag.innerHTML = newProduct.product[i].price
		image.style.width = "50%"
		image
		content.appendChild(image)
		content.appendChild(nameTag)
		content.appendChild(priceTag)
	}
	
	const outer = document.createElement("button")
	outer.classList.add('btn-checkout')
	outer.innerHTML = "Checkout"

	content.appendChild(outer)


}

//---CAROUSEL
let navIndex = 1;
showSlides(navIndex);

function nextSlides(n) {
    showSlides(navIndex += n);
}

function currentSlide(n) {
    showSlides(navIndex = n);
}

function showSlides(n) {
    let i;
    let carousel = document.getElementsByClassName("carousel-item");
    let nav = document.getElementsByClassName("nav");
    if (n > carousel.length) {navIndex = 1}    
    if (n < 1) {navIndex = carousel.length}
    for (i = 0; i < carousel.length; i++) {
        carousel[i].style.display = "none";  
    }
    for (i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace(" active", "");
    }
    carousel[navIndex-1].style.display = "block";  
    nav[navIndex-1].className += " active";
}

//-----MODAL-----


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}