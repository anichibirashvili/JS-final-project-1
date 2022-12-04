const url= "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"
const data = [];
const load =document.querySelector(".loading")


function fetchData () {
    load.style.display="block"
    fetch(url)
    .then(response => response.json())
    .then(cargonumbers =>
        {data.push(...cargonumbers)
            load.style.display = "none";})
    
    .catch((err) => console.log(err));
}

window.addEventListener ("load",() => {fetchData()}) 

const amazon = document.getElementById("amazon");
const walmart = document.getElementById("walmart");
const apple = document.getElementById("apple");
const american = document.getElementById("american");
const cargonumber =document.getElementById("result")


if(amazon) {
    amazon.addEventListener("click", () => {
        data.forEach((cargoboxes) => {
            if(cargoboxes.name === "Amazon.com") {
                document.querySelector(".numberofcargos").value=cargoboxes.boxes;

                let boxsum = countboxes(cargoboxes.boxes);
                cargonumber.innerHTML=boxsum;
            }
        })
    })
}


if(apple) {
    apple.addEventListener("click", () => {
        data.forEach((cargoboxes) => {
            if(cargoboxes.name === "Apple" ) {
                document.querySelector(".numberofcargos").value = cargoboxes.boxes;

                let boxsum = countboxes(cargoboxes.boxes);
                cargonumber.innerHTML=boxsum;
            }
        })
    } )
}

if(walmart) {
    walmart.addEventListener("click", () => {
        data.forEach((cargoboxes) => {
            if(cargoboxes.name === "Walmart" ) {
                document.querySelector(".numberofcargos").value = cargoboxes.boxes;

                let boxsum = countboxes(cargoboxes.boxes);
                cargonumber.innerHTML=boxsum;
            }
        })
    } )
}

if(american) {
    american.addEventListener("click", () => {
        data.forEach((cargoboxes) => {
            if(cargoboxes.name === "American Express" ) {
                document.querySelector(".numberofcargos").value = cargoboxes.boxes;

                let boxsum = countboxes(cargoboxes.boxes);
                cargonumber.innerHTML=boxsum;


            }
        })
    } )
}


function countboxes(boxes) {
    let splited = boxes.split(",");
    let tonumber=splited.map(elements => parseInt(elements))
    let result = tonumber.reduce((acc,previous) => acc + previous);
    return Math.ceil(result/10); 
}