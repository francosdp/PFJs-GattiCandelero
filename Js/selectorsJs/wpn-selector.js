const wpnShowname = document.getElementById("wpn-showname")
const wpnShowcal = document.getElementById("wpn-showcal")
const wpnShowFiremode = document.getElementById("wpn-showfiremode")
const wpnShock = document.getElementById("wpn-shock")
const wpnPen = document.getElementById("wpn-pen")
const wpnDmg = document.getElementById("wpn-dmg")
let foundWeapon
let pistolas = []

document.addEventListener('DOMContentLoaded', () => {
    fetch("../data/weapons.json")
        .then(response => response.json())
        .then(data => {
            function buscarArma(wpnId) {
                foundWeapon = pistolas.flat().find(arma => arma.objId === wpnId);
            }
            pistolas = data.find(item => item.type === "pistols").items;
            pistolas.forEach(pistola => {
                const button = document.createElement('button')
                button.id = `${pistola.objId}`;
                button.innerText = `${pistola.name}`
                button.addEventListener
                    ('click', function (event) {
                        event.preventDefault()
                        wpnId = pistola.objId
                        console.log(pistola.objId)
                        buscarArma(wpnId)
                        console.log(foundWeapon)
                        wpnShowname.innerText = foundWeapon.name
                        wpnShowcal.innerText = foundWeapon.ammo
                        wpnShowFiremode.innerText = foundWeapon.firemode
                        wpnDmg.innerText = foundWeapon.hitDamage
                        wpnPen.innerText = foundWeapon.hitPenetration
                        wpnShock.innerText = foundWeapon.hitShock
                    })
                pistolSelector.appendChild(button);
            })

        })
})
const pistolSelector = document.getElementById("pistol-selector")

let shotguns = []

document.addEventListener('DOMContentLoaded', () => {
    fetch("../data/weapons.json")
        .then(response => response.json())
        .then(data => {
            function buscarArma(wpnId) {
                foundWeapon = shotguns.flat().find(arma => arma.objId === wpnId);
            }
            shotguns = data.find(item => item.type === "shotguns").items;
            shotguns.forEach(shotgun => {
                const button = document.createElement('button')
                button.id = `${shotgun.objId}`;
                button.innerText = `${shotgun.name}`
                button.addEventListener
                    ('click', function (event) {
                        event.preventDefault()
                        wpnId = shotgun.objId
                        console.log(shotgun.objId)
                        buscarArma(wpnId)
                        console.log(foundWeapon)
                        wpnShowname.innerText = foundWeapon.name
                        wpnShowcal.innerText = foundWeapon.ammo
                        wpnShowFiremode.innerText = foundWeapon.firemode
                        wpnDmg.innerText = foundWeapon.hitDamage
                        wpnPen.innerText = foundWeapon.hitPenetration
                        wpnShock.innerText = foundWeapon.hitShock
                    })
                    shotgunSelector.appendChild(button);
            })

        })
})
const shotgunSelector = document.getElementById("shotgun-selector")

let submachines = []

document.addEventListener('DOMContentLoaded', () => {
    fetch("../data/weapons.json")
        .then(response => response.json())
        .then(data => {
            function buscarArma(wpnId) {
                foundWeapon = submachines.flat().find(arma => arma.objId === wpnId);
            }
            submachines = data.find(item => item.type === "submachines").items;
            submachines.forEach(submachine => {
                const button = document.createElement('button')
                button.id = `${submachine.objId}`;
                button.innerText = `${submachine.name}`
                button.addEventListener
                    ('click', function (event) {
                        event.preventDefault()
                        wpnId = submachine.objId
                        console.log(submachine.objId)
                        buscarArma(wpnId)
                        console.log(foundWeapon)
                        wpnShowname.innerText = foundWeapon.name
                        wpnShowcal.innerText = foundWeapon.ammo
                        wpnShowFiremode.innerText = foundWeapon.firemode
                        wpnDmg.innerText = foundWeapon.hitDamage
                        wpnPen.innerText = foundWeapon.hitPenetration
                        wpnShock.innerText = foundWeapon.hitShock
                    })
                    submachineSelector.appendChild(button);
            })

        })
})
const submachineSelector = document.getElementById("submachines-selector")


let rifles = []

document.addEventListener('DOMContentLoaded', () => {
    fetch("../data/weapons.json")
        .then(response => response.json())
        .then(data => {
            function buscarArma(wpnId) {
                foundWeapon = rifles.flat().find(arma => arma.objId === wpnId);
            }
            rifles = data.find(item => item.type === "rifles").items;
            rifles.forEach(rifle => {
                const button = document.createElement('button')
                button.id = `${rifle.objId}`;
                button.innerText = `${rifle.name}`
                button.addEventListener
                    ('click', function (event) {
                        event.preventDefault()
                        wpnId = rifle.objId
                        console.log(rifle.objId)
                        buscarArma(wpnId)
                        console.log(foundWeapon)
                        wpnShowname.innerText = foundWeapon.name
                        wpnShowcal.innerText = foundWeapon.ammo
                        wpnShowFiremode.innerText = foundWeapon.firemode
                        wpnDmg.innerText = foundWeapon.hitDamage
                        wpnPen.innerText = foundWeapon.hitPenetration
                        wpnShock.innerText = foundWeapon.hitShock
                    })
                    riflesSelector.appendChild(button);
            })

        })
})
const riflesSelector = document.getElementById("rifles-selector")

let snipers = []
document.addEventListener('DOMContentLoaded', () => {
    fetch("../data/weapons.json")
        .then(response => response.json())
        .then(data => {
            function buscarArma(wpnId) {
                foundWeapon = snipers.flat().find(arma => arma.objId === wpnId);
            }
            snipers = data.find(item => item.type === "snipers").items;
            snipers.forEach(sniper => {
                const button = document.createElement('button')
                button.id = `${sniper.objId}`;
                button.innerText = `${sniper.name}`
                button.addEventListener
                    ('click', function (event) {
                        event.preventDefault()
                        wpnId = sniper.objId
                        console.log(sniper.objId)
                        buscarArma(wpnId)
                        console.log(foundWeapon)
                        wpnShowname.innerText = foundWeapon.name
                        wpnShowcal.innerText = foundWeapon.ammo
                        wpnShowFiremode.innerText = foundWeapon.firemode
                        wpnDmg.innerText = foundWeapon.hitDamage
                        wpnPen.innerText = foundWeapon.hitPenetration
                        wpnShock.innerText = foundWeapon.hitShock
                    })
                    snipersSelector.appendChild(button);
            })

        })
})
const snipersSelector = document.getElementById("snipers-selector")
