let foundRange
const rangeShock = document.getElementById('range-shock')
const rangePen = document.getElementById('range-penetration')
const rangeDmg = document.getElementById('range-damage')
let distances = []

document.addEventListener('DOMContentLoaded', () => {
    fetch("../data/distances.json")
        .then(response => response.json())
        .then(data => {
            function buscarRango(rangeId) {
                foundRange = distances.flat().find(distance => distance.distanceObjId === rangeId);
            }
            ranges = data;
            console.log(data)
            ranges.forEach(range => {
                const button = document.createElement('button')
                button.id = `${range.distanceObjId}`;
                button.innerText = `${range.name}`
                button.addEventListener
                    ('click', function (event) {
                        event.preventDefault()
                        rangeId = range.distanceObjId
                        console.log(range.distanceObjId)
                        buscarRango(rangeId)
                        console.log(foundRange)
                        rangeShock.innerText = foundRange.reducedShock
                        rangePen.innerText = foundRange.reducedPenetration
                        rangeDmg.innerText = foundRange.reducedDamage
                        rangeSelector.appendChild(button);
                    })

            })
        })
})
const rangeSelector = document.getElementById('range-selector')