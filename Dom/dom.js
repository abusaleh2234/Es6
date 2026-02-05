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

// console.log(everyPlace);

for (const place of everyPlace) {
    place.style.textAlign = "center";
    console.log(place.innerText);
    
}
