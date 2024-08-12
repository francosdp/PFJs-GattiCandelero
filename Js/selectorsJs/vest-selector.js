
const vestShock = document.getElementById("vest-shock")
const vestPen = document.getElementById("vest-penetration")
const vestDmg = document.getElementById("vest-damage")
let foundArmor
let vests = []

document.addEventListener('DOMContentLoaded', () => {
    fetch("./data/vests.json")
        .then(response => response.json())
        .then(data => {
            function buscarChaleco(vestId) {
                foundArmor = vests.flat().find(vest => vest.vestId === vestId);            }            
            vests = data;
            console.log(data)
            vests.forEach(vest=> { 
                const button = document.createElement('button')
                button.id = `${vest.vestId}`;
                button.innerText = `${vest.name}`
                button.addEventListener
                    ('click', function (event) {
                        event.preventDefault()
                        vestId = vest.vestId
                        console.log(vest.vestId)
                        buscarChaleco(vestId)
                        console.log(foundArmor)
                        vestShock.innerText = foundArmor.shockProtection
                        vestPen.innerText = foundArmor.penetrationProtection
                        vestDmg.innerText = foundArmor.damageProtection
                        Toastify({
                            text: "Chaleco " + vest.name,
                            duration: 3000
                            }).showToast();
                    })
                    vestSelector.appendChild(button);
            })

        })
})
const vestSelector=document.getElementById('vest-selector')