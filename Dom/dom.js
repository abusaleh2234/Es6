// document.getElementsByTagName("h2")[0].style.color = "red"
// document.querySelector("h2").style.color= "red"

const title = document.getElementsByTagName("h2")
// title[0].style.textAlign = "center"
// console.log(title);

const lis  = document.getElementsByTagName("li")

// console.log(li);
for (const li of lis) {
    // console.log(li.innerText);
    // li.style.color = "red"
}

const place = document.getElementById("place")

// console.log(place.innerText);

place.innerText = "My tour Place"
place.style.textAlign = "center"

const everyPlace = document.getElementsByClassName("everyPlace")

console.log(everyPlace);

for (const place of everyPlace) {
    place.style.textAlign = "center";
    console.log(place.innerText);
    
}


const productList = document.querySelectorAll(".productList li")

// console.log(productList);

for (const product of productList) {
    // console.log(product.innerText);
    
}


const proPhone = document.querySelector(".productList li")
// console.log(proPhone);



// Attribute operation

const Title = document.getElementById("gadgets")

Title.classList.remove("chang")
Title.classList.add("bg-center")
Title.setAttribute("href", "abusaleh.com")
console.log(Title.getAttribute("class"));
console.log(Title.classList);

const tour = document.getElementById("place")
// tour.innerHTML = "<h2> how tour place</h2>"
tour.innerText = "good tour place"


// 5