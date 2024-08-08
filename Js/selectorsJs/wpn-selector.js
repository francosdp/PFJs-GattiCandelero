// Selector Pistolas
const ClassBtn1 = document.getElementById('btn1')
const ClassBtn2 = document.getElementById('btn2')
const ClassBtn3 = document.getElementById('btn3')
const ClassBtn4 = document.getElementById('btn4')
const ClassBtn5 = document.getElementById('btn5')
let foundWeapon

const wpnShowname = document.getElementById("wpn-showname")
const wpnShowcal = document.getElementById("wpn-showcal")
const wpnShowFiremode = document.getElementById("wpn-showfiremode")
const wpnShock = document.getElementById("wpn-shock")
const wpnPen = document.getElementById("wpn-pen")
const wpnDmg = document.getElementById("wpn-dmg")

ClassBtn1.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 10
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn2.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 11
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn3.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 12
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn4.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 13
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock

})
const ClassBtn20 = document.getElementById('btn20')
const ClassBtn21 = document.getElementById('btn21')
const ClassBtn22 = document.getElementById('btn22')

ClassBtn20.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 20
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn21.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 21
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn22.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 22
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})


function buscarArma(wpnId) {
    foundWeapon = weapons.flat().find(arma => arma.objId === wpnId);
}


const ClassBtn30 = document.getElementById('btn30')
const ClassBtn31 = document.getElementById('btn31')

ClassBtn30.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 30
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn31.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 31
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})


const ClassBtn40 = document.getElementById('btn40')
const ClassBtn41 = document.getElementById('btn41')
const ClassBtn42 = document.getElementById('btn42')
const ClassBtn43 = document.getElementById('btn43')
const ClassBtn44 = document.getElementById('btn44')


ClassBtn40.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 40
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn41.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 41
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn42.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 42
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn43.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 43
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn44.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 44
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})


const ClassBtn50 = document.getElementById('btn50')
const ClassBtn51 = document.getElementById('btn51')
const ClassBtn52 = document.getElementById('btn52')
const ClassBtn53 = document.getElementById('btn53')

ClassBtn50.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 50
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn51.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 51
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn52.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 52
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn53.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 53
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
