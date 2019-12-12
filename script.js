let burger = document.querySelector(".burgermenu");

function myFunction() {
    burger.classList.toggle("fade_in");
    burger.classList.toggle("fade_out");
    burger.classList.toggle("luk");
    burger.classList.toggle("change");
}


var slider = document.getElementById("myRange");

var co2 = document.getElementById("ton");
var tid = document.getElementById("timer");
var tid2 = document.getElementById("minutter");

var theJson;

document.addEventListener("DOMContentLoaded", getList);


async function getList() {
    let jsonData = await fetch("https://spreadsheets.google.com/feeds/list/1T7QLxXy3YAkULDdFjzzs8l9kez4-OnIH1FowfuraoSI/od6/public/values?alt=json");
    theJson = await jsonData.json();
    console.log("hej");
    console.log(theJson);
    showJson();

}


co2.innerHTML = slider.value;
//    Sætter default value (50) og udskriver den

var cairo = document.getElementById("cairo");
var moskva = document.getElementById("moskva");
var new_york = document.getElementById("newyork");
var accra = document.getElementById("accra");
var nuuk = document.getElementById("nuuk");

slider.oninput = function () {
    const kvarter = this.value;
    const timer = Math.floor(kvarter / 4);
    const minutter = kvarter % 4 * 15;


    co2.innerHTML = Math.round(this.value / 4 * 109);
    tid.innerHTML = timer;
    tid2.innerHTML = minutter;
}

//    ændrer valuen på tryk



function showJson() {


    console.log(theJson)
    theJson.feed.entry.forEach((dest, i) => {



        if (i === 0) {
            cairo.addEventListener("click", () => {
                document.querySelector(".slidecontainer").style.display = "block";
                co2.innerHTML = dest.gsx$co2.$t;
                slider.value = dest.gsx$slidervalue.$t;
                tid.innerHTML = dest.gsx$timer.$t;
                tid2.innerHTML = dest.gsx$kvarter.$t
                //        ændre 500 til en json værdi
            })

        } else if (i === 1) {
            moskva.addEventListener("click", () => {
                document.querySelector(".slidecontainer").style.display = "block";
                co2.innerHTML = dest.gsx$co2.$t;
                slider.value = dest.gsx$slidervalue.$t;
                tid.innerHTML = dest.gsx$timer.$t;
                tid2.innerHTML = dest.gsx$kvarter.$t
            })

        } else if (i === 2) {
            new_york.addEventListener("click", () => {
                document.querySelector(".slidecontainer").style.display = "block";
                co2.innerHTML = dest.gsx$co2.$t;
                slider.value = dest.gsx$slidervalue.$t;
                tid.innerHTML = dest.gsx$timer.$t;
                tid2.innerHTML = dest.gsx$kvarter.$t
            })

        } else if (i === 3) {
            accra.addEventListener("click", () => {
                document.querySelector(".slidecontainer").style.display = "block";
                co2.innerHTML = dest.gsx$co2.$t;
                slider.value = dest.gsx$slidervalue.$t;
                tid.innerHTML = dest.gsx$timer.$t;
                tid2.innerHTML = dest.gsx$kvarter.$t
            })

        } else {
            nuuk.addEventListener("click", () => {
                document.querySelector(".slidecontainer").style.display = "block";
                co2.innerHTML = dest.gsx$co2.$t;
                slider.value = dest.gsx$slidervalue.$t;
                tid.innerHTML = dest.gsx$timer.$t;
                tid2.innerHTML = dest.gsx$kvarter.$t
            })


        }


    })

}
