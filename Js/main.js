
// Panel Usuario
const inputNick = document.getElementById("input-nick")
const submitNick = document.getElementById("submit-nick")
let nick
let wpnId
inputNick.addEventListener('change', function () {
})

submitNick.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Nick Recibido " + inputNick.value)
    const chooseWpn = document.getElementById("choose-text")
    chooseWpn.innerText = "Bien " + inputNick.value + " elije tu arma"
    nick = inputNick.value
})

const btnNext = document.getElementById("next")
const nextNick = document.getElementById('next-nick')

btnNext.addEventListener('click', function (event) {
    event.preventDefault()
    nextNick.innerText = "Perfecto " + nick + " estos son sus resultados:"
    console.log(nick)
})

const btnCalcular = document.getElementById("do-calcular")
const strongWpn = document.getElementById("strong-wpn")
const strongVest = document.getElementById("strong-vest")
const strongRange = document.getElementById("strong-range")
const strongShock = document.getElementById("strong-shock")
const strongPen = document.getElementById("strong-pen")
const strongDmg = document.getElementById("strong-dmg")

let shockDone
let penetrationDone
let damageDone
let searchHistory = []
let historyDiv = document.getElementById("history-search")

function damageCalculator(a, b, c) {
    return a / b / c
}

let lastSearch = []

function newSearch(weapon, vest, range, a, b, c) {
    return {
        weaponName: weapon,
        vestTier: vest,
        rangeDistance: range,
        shockHit: a,
        penHit: b,
        dmgHit: c,
    }
}
function saveSearchLocal() {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}
const getSearchLocal = () => {
    const searchStorage = JSON.parse(localStorage.getItem("searchHistory"));
    return searchStorage;
};

function addSearch(search) {
    searchHistory.push(search);
}


const showSearch = (searchHistory) => {
    const div = document.createElement("div");

    historyDiv.innerHTML = '';

    searchHistory.forEach(search => {
        div.innerHTML += `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Arma</strong>: ${search.weaponName} -
                    <strong>Vest Tier</strong>: ${search.vestTier}
                    <strong>Distancia</strong>: ${search.rangeDistance}
                    <p>Stats Shock/Penetracion/Daño</p> ${search.shockHit}/${search.penHit}/${search.dmgHit}
                </div>
            </div>
        `;
        historyDiv.appendChild(div);
    });
};

const getSearchs = () => {
    if (localStorage.getItem("searchHistory")) {
        searchHistory = getSearchLocal();
        showSearch(searchHistory)
    };
};


btnCalcular.addEventListener('click', function (event) {
    event.preventDefault()
    strongWpn.innerText = foundWeapon.name
    strongVest.innerText = foundArmor.tier
    strongRange.innerText = foundRange.meters
    shockDone = damageCalculator(foundWeapon.hitShock, foundRange.reducedShock, foundArmor.shockProtection)
    penetrationDone = damageCalculator(foundWeapon.hitPenetration, foundRange.reducedPenetration, foundArmor.penetrationProtection)
    damageDone = damageCalculator(foundWeapon.hitDamage, foundRange.reducedDamage, foundArmor.penetrationProtection)
    strongShock.innerText = shockDone.toFixed(2)
    strongPen.innerText = penetrationDone.toFixed(2)
    strongDmg.innerText = damageDone.toFixed(2)
    let search = newSearch(foundWeapon.name, foundArmor.tier, foundRange.meters, shockDone.toFixed(2), penetrationDone.toFixed(2), damageDone.toFixed(2))
    console.log(search)
    addSearch(search)
    console.log(searchHistory)
    saveSearchLocal()
})
document.addEventListener("DOMContentLoaded", getSearchs);

let btnClear = document.getElementById("clear-history")

btnClear.addEventListener('click', function (event) { 
    localStorage.clear()
    location.reload()}
)
let btnRefresh =document.getElementById("new-search")
btnRefresh.addEventListener('click',function(){
window.scrollTo({
    top:0,
    behavior:"smooth"
})
setTimeout(function() {  
    location.reload();  
}, 1000);
})


//Aun falta el diseño de la pagina y algunos detalles
// Pero en principio la calculadora funciona bien
// Registra datos, guarda en local y modifica el dom.