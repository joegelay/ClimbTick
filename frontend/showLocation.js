document.addEventListener('DOMContentLoaded', function() {
    fetchLocation()
})

const newSearch = new URLSearchParams(window.location.search)
const locationId = newSearch.get('id')

function fetchLocation() {
    fetch(`http://localhost:8080/locations/${locationId}`)
    .then(response => response.json())
    .then(location => renderLocation(location))
}

function renderLocation(location) {
    const head = document.getElementById('selected-location')

    const locationData = document.createElement('p')
    locationData.innerText = `${location.crag}, ${location.state}`
    
    head.appendChild(locationData)

    const climbList = document.getElementById('climbs')

    const climbs = location.climbs 
    climbs.forEach(climb => {
        const a = document.createElement('a')
        a.innerHTML = `<a href='showclimb.html?id=${climb.id}'>${climb.name}</a>`
        
        climbList.appendChild(a)
    })
}