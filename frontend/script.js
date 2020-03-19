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
        climbLi.innerText = climb.name

        const climbNotes = document.createElement('p')
        climbNotes.innerText = `Notes: ${climb.notes}`
        
        const climbGrade = document.createElement('p')
        climbGrade.innerText = `Grade: ${climb.grade}`

        const climbDate = document.createElement('p')
        climbDate.innerText = `Date: ${climb.date}`

        const climbStyle = document.createElement('p')
        climbStyle.innerText = `Style: ${climb.style}`

        const climbStars = document.createElement('p')
        climbStars.innerText = `Star Rating: ${climb.star_rating}`

        const climbLocation = document.createElement('p')
        climbLocation.innerText = `Location: ${climb.location.crag}, ${climb.location.state}`

        climbList.appendChild(climbLi)

        climbLi.appendChild(climbLocation)
        climbLi.appendChild(climbDate)
        climbLi.appendChild(climbGrade)
        climbLi.appendChild(climbStyle)
        climbLi.appendChild(climbStars)
        climbLi.appendChild(climbNotes)
    })
}