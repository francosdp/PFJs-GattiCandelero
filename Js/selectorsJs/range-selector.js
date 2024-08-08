let foundRange

const ClassBtn155 = document.getElementById('btn155')
const ClassBtn156 = document.getElementById('btn156')
const ClassBtn157 = document.getElementById('btn157')
const ClassBtn158 = document.getElementById('btn158')
const ClassBtn159 = document.getElementById('btn159')
const ClassBtn160 = document.getElementById('btn160')
const ClassBtn161 = document.getElementById('btn161')

const rangeShock = document.getElementById('range-shock')
const rangePen = document.getElementById('range-penetration')
const rangeDmg = document.getElementById('range-damage')



function buscarRango(rangeId) {
    foundRange = distances.flat().find(distance => distance.distanceObjId === rangeId);
}


ClassBtn155.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 155
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn156.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 156
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn157.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 157
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn158.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 158
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn159.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 159
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn160.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 160
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn161.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 161
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})