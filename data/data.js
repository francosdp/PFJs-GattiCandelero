// Efectos de la distancia
const distance1 = {
    meters: "100 a 200 metros.",
    distanceObjId: 155,
    reducedShock: 1,
    reducedPenetration: 1,
    reducedDamage: 0.1,
}
const distance2 = {
    meters: "200 a 300 mts.",
    distanceObjId: 156,
    reducedShock: 1.5,
    reducedPenetration: 1.3,
    reducedDamage: 1.4,
}
const distance3 = {
    meters: "300 a 400 mts.",
    distanceObjId: 157,
    reducedShock: 1.8,
    reducedPenetration: 1.5,
    reducedDamage: 1.5,
}
const distance4 = {
    meters: "400 a 500 mts.",
    distanceObjId: 158,
    reducedShock: 2,
    reducedPenetration: 1.7,
    reducedDamage: 1.7,
}
const distance5 = {
    meters: "500 a 600 mts.",
    distanceObjId: 159,
    reducedShock: 2.4,
    reducedPenetration: 2,
    reducedDamage: 1.9,
}
const distance6 = {
    meters: "600 a 700 mts.",
    distanceObjId: 160,
    reducedShock: 2.6,
    reducedPenetration: 2.1,
    reducedDamage: 2,
}
const distance7 = {
    meters: "+700 mts.",
    distanceObjId: 161,
    reducedShock: 3,
    reducedPenetration: 2.5,
    reducedDamage: 2.3,
}

const distances = [distance1, distance2, distance3, distance4, distance5, distance6, distance7]

//   Chalecos / Armadura
const tier1Vest = {
    tier: "Tier 1",
    vestId: 105,
    shockProtection: 2,
    penetrationProtection: 2,
    damageProtection: 1.5,
}
const tier2Vest = {
    tier: "Tier 2",
    vestId: 106,
    shockProtection: 2.3,
    penetrationProtection: 2.5,
    damageProtection: 1.8,
}
const tier3Vest = {
    tier: "Tier 3",
    vestId: 107,
    shockProtection: 2.6,
    penetrationProtection: 3,
    damageProtection: 2.5,
}
const tier4Vest = {
    tier: "Tier 4",
    vestId: 108,
    shockProtection: 2.8,
    penetrationProtection: 5,
    damageProtection: 3.5,
}
const tier5Vest = {
    tier: "Tier 5",
    vestId: 109,
    shockProtection: 3,
    penetrationProtection: 6.5,
    damageProtection: 5,
}
const vests = [tier1Vest, tier2Vest, tier3Vest, tier4Vest, tier5Vest]

// Objeto Pistolas y Array
// Calculadora de Daño InGame.
const MKII = {
    objId: 10,
    name: "MK II",
    ammo: ".22 LR",
    firemode: "Semi-Automatica",
    hitShock: 2,
    hitPenetration: 8,
    hitDamage: 12,

}
const Mlock91 = {
    objId: 11,
    name: "Mlock91",
    ammo: "9x19mm",
    firemode: "Semi-Automatica",
    hitShock: 10,
    hitPenetration: 15,
    hitDamage: 18,
}
const Kolt1911 = {
    objId: 12,
    name: "Kolt 1911",
    ammo: ".45ACP",
    firemode: "Semi-Automatica",
    hitShock: 15,
    hitPenetration: 13,
    hitDamage: 24,
}
const Deagle = {
    objId: 13,
    name: "Deagle",
    ammo: ".357",
    firemode: "Semi-Automatica",
    hitShock: 25,
    hitPenetration: 18,
    hitDamage: 29,
}
const pistolas = [MKII, Mlock91, Kolt1911, Deagle]
// Objeto Escopetas y Array

const BK133 = {
    objId: 20,
    name: "BK-133",
    ammo: "12ga",
    firemode: "Pump",
    hitShock: 70,
    hitPenetration: 25,
    hitDamage: 50,
}
const BK43 = {
    objId: 21,
    name: "BK-43",
    ammo: "12ga",
    firemode: "Cañon Doble",
    hitShock: 70,
    hitPenetration: 25,
    hitDamage: 50,
}
const Vaiga = {
    objId: 22,
    name: "Vaiga",
    ammo: "12ga",
    firemode: "Semi-Automática y Automática",
    hitShock: 70,
    hitPenetration: 25,
    hitDamage: 50,
}
const escopetas = [BK133, BK43, Vaiga]
// Objeto Subfusiles y Array

const SG5K = {
    objId: 30,
    name: "SG5-K",
    ammo: "9x19mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 17,
    hitPenetration: 20,
    hitDamage: 22,
}
const USG45 = {
    objId: 31,
    name: "USG -45",
    ammo: ".45ACP",
    firemode: "Semi-Automática y Automática",
    hitShock: 19,
    hitPenetration: 18,
    hitDamage: 29,
}
const subfusiles = [SG5K, USG45]
// Objeto Fusiles y Array

const M4A1 = {
    objId: 40,
    name: "M4-A1",
    ammo: "5.56x45mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 41,
    hitPenetration: 52,
    hitDamage: 43,
}
const KA74 = {
    objId: 41,
    name: "KA-74",
    ammo: "5.45x39mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 39,
    hitPenetration: 48,
    hitDamage: 39,
}
const LAR = {
    objId: 42,
    name: "LAR",
    ammo: "308WIN",
    firemode: "Semi-Automática y Automática",
    hitShock: 60,
    hitPenetration: 64,
    hitDamage: 55,
}

const KAM = {
    objId: 43,
    name: "KA-M",
    ammo: "7.62x39mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 57,
    hitPenetration: 59,
    hitDamage: 49,
}

const SVAL = {
    objId: 44,
    name: "SVAL",
    ammo: "9x39mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 29,
    hitPenetration: 70,
    hitDamage: 39,
}
const fusiles = [M4A1, KA74, LAR, KAM, SVAL]
// Objeto Fusiles y Array

const M70Tundra = {
    objId: 50,
    name: "M70 Tundra",
    ammo: "308WIN",
    firemode: "Cerrojo",
    hitShock: 80,
    hitPenetration: 80,
    hitDamage: 67,
}
const Mosin = {
    objId: 51,
    name: "Mosin 91/30",
    ammo: "7.62x54mmR",
    firemode: "Cerrojo",
    hitShock: 84,
    hitPenetration: 82,
    hitDamage: 72,
}
const VSD = {
    objId: 52,
    name: "VSD",
    ammo: "7.62x39mm",
    firemode: "Semi-Automática",
    hitShock: 70,
    hitPenetration: 67,
    hitDamage: 59,
}
const Blaze = {
    objId: 53,
    name: "Blaze",
    ammo: "308WIN",
    firemode: "Unico y Doble Disparo",
    hitShock: 76,
    hitPenetration: 73,
    hitDamage: 49,
}
const rifles = [M70Tundra, Mosin, VSD]

// Array General

const weapons = [pistolas, escopetas, subfusiles, fusiles, rifles]