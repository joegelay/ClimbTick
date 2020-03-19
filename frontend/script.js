document.addEventListener('DOMContentLoaded', function() {
    fetchClimbs();
});

const climbList = document.getElementById('climb-list')

function fetchClimbs(){
    fetch("http://localhost:8080/climbs")
    .then(response => response.json())
    .then(climbs => renderClimbs(climbs))
}

function renderClimbs(climbs){
    climbs.forEach(climb => {

        const climbLi = document.createElement('li')

        const climbA = document.createElement('a')
        climbA.innerHTML = `<a href='showClimb.html?id=${climb.id}'>${climb.name}</a>`

        const climbLocation = document.createElement('a')
        climbLocation.innerHTML = `<a href='showLocation.html?id=${climb.location.id}'>${climb.location.crag}, ${climb.location.state}`

        climbList.appendChild(climbLi)
        climbLi.appendChild(climbA)
        climbLi.appendChild(climbLocation)

    })
}