const ClassBtn105 = document.getElementById('btn105')
const ClassBtn106 = document.getElementById('btn106')
const ClassBtn107 = document.getElementById('btn107')
const ClassBtn108 = document.getElementById('btn108')
const ClassBtn109 = document.getElementById('btn109')

const vestShock = document.getElementById("vest-shock")
const vestPen = document.getElementById("vest-penetration")
const vestDmg = document.getElementById("vest-damage")

let foundArmor


function buscarChaleco(vestsId) {
    foundArmor = vests.flat().find(vest => vest.vestId === vestsId);
}

ClassBtn105.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 105
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection
})
ClassBtn106.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 106
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection
})
ClassBtn107.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 107
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection
})
ClassBtn108.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 108
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection

})
ClassBtn109.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 109
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection
})
