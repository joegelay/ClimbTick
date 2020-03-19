document.addEventListener('DOMContentLoaded', function() {
    fetchClimb()
})

const newSearch = new URLSearchParams(window.location.search)
const climbId = newSearch.get('id')

function fetchClimb() {
    fetch(`http://localhost:8080/climbs/${climbId}`)
    .then(response => response.json())
    .then(climb => renderClimb(climb))
}

function renderClimb(climb) {
    const head = document.getElementById('selected-climb')

    const climbData = document.createElement('p')
    climbData.innerText = climb.name

    const climbLocation = document.createElement('a')
    climbLocation.innerHTML = `<a href='showLocation.html?id=${climb.location.id}'>Location: ${climb.location.crag}, ${climb.location.state}`

    const climbDate = document.createElement('p')
    climbDate.innerText = `Date: ${climb.date}`

    const climbGrade = document.createElement('p')
    climbGrade.innerText = `Grade: ${climb.grade}`

    const climbStyle = document.createElement('p')
    climbStyle.innerText = `Style: ${climb.style}`

    const climbStars = document.createElement('p')
    climbStars.innerText = `Star Rating: ${climb.star_rating}`

    const climbNotes = document.createElement('p')
    climbNotes.innerText = `Notes: ${climb.notes}`

    head.appendChild(climbData)

    climbData.appendChild(climbLocation)
    climbData.appendChild(climbDate)
    climbData.appendChild(climbGrade)
    climbData.appendChild(climbStyle)
    climbData.appendChild(climbStars)
    climbData.appendChild(climbNotes)
}