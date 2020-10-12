const ORES =  {
    "Veldspar":{
        "volume": .1,
        "rarity": "common",
        "Trinatium": 4.13,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Scordite":{
        "volume": .15,
        "rarity": "common",
        "Trinatium": 1.60,
        "Pyerite":   1.13,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Pyroxeres":{
        "volume": 1.5,
        "rarity": "uncommon",
        "Trinatium": 17.53,
        "Pyerite":   5.60,
        "Mexallon":  2.50,
        "Isogen":    0,
        "Nocxium":   .30,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Plagioclase":{
        "volume": .35,
        "rarity": "common",
        "Trinatium": .50,
        "Pyerite":   .63,
        "Mexallon":  .96,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Omber":{
        "volume": .6,
        "rarity": "uncommon",
        "Trinatium": 6.00,
        "Pyerite":   .73,
        "Mexallon":  0,
        "Isogen":    .53,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Kernite":{
        "volume": 1.2,
        "rarity": "uncommon",
        "Trinatium": 2.76,
        "Pyerite":   0,
        "Mexallon":  5.03,
        "Isogen":    5.0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Jaspet":{
        "volume": 4,
        "rarity": "rare",
        "Trinatium": 0,
        "Pyerite":   0,
        "Mexallon":  24.60,
        "Isogen":    0,
        "Nocxium":   .46,
        "Zydrine":   .53,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Hemorphite":{
        "volume": 3,
        "rarity": "special",
        "Trinatium": 55.00,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    1.60,
        "Nocxium":   .10,
        "Zydrine":   .50,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Spodumain":{
        "volume": 3.2,
        "rarity": "special",
        "Trinatium": 197.00,
        "Pyerite":   37.40,
        "Mexallon":  3.60,
        "Isogen":    .60,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Dark Ochre":{
        "volume": 1.6,
        "rarity": "uncommon",
        "Trinatium": 9.60,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    .53,
        "Nocxium":   .40,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Gneiss":{
        "volume": 2,
        "rarity": "special",
        "Trinatium": 0,
        "Pyerite":   8.80,
        "Mexallon":  9.17,
        "Isogen":    1.83,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Hedbergite":{
        "volume": 3,
        "rarity": "rare",
        "Trinatium": 27.26,
        "Pyerite":   0,
        "Mexallon":  4.60,
        "Isogen":    .06,
        "Nocxium":   .13,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Crokite":{
        "volume": 6.4,
        "rarity": "rare",
        "Trinatium": 388.80,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   .93,
        "Zydrine":   .93,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Bistot":{
        "volume": 6.4,
        "rarity": "precious",
        "Trinatium": 0,
        "Pyerite":   61.20,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   .33,
        "Megacyte":  .76,
        "Morphite":  0,
    },
    "Arkonor":{
        "volume": 6.4,
        "rarity": "precious",
        "Trinatium": 88.00,
        "Pyerite":   0,
        "Mexallon":  10.00,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  1.03,
        "Morphite":  0,
    },
    "Mercoxit":{
        "volume": 8,
        "rarity": "precious",
        "Trinatium": 0,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  .60,
    },
};

function calculate(params) {
    let trit = Number(document.getElementById('trit').value)
    let pyer = Number(document.getElementById('pyer').value)
    let mex = Number(document.getElementById('mex').value)
    let iso = Number(document.getElementById('iso').value)
    let nox = Number(document.getElementById('nox').value)
    let zyd = Number(document.getElementById('zyd').value)
    let mega = Number(document.getElementById('mega').value)
    let morph = Number(document.getElementById('morph').value)
    // skills
    let common = Number(document.getElementById('common-skill').value)
    let uncommon = Number(document.getElementById('uncommon-skill').value)
    let special = Number(document.getElementById('special-skill').value)
    let rare = Number(document.getElementById('rare-skill').value)
    let precious = Number(document.getElementById('precious-skill').value)

    calculatedOreOutputs = adjustOreOutputs(common, uncommon, special, rare, precious)

    trit = trit > 0 ? trit : 0
    pyer = pyer > 0 ? pyer : 0
    mex = mex > 0 ? mex : 0
    iso = iso > 0 ? iso : 0
    nox = nox > 0 ? nox : 0
    zyd = zyd > 0 ? zyd : 0
    mega = mega > 0 ? mega : 0
    morph = morph > 0 ? morph : 0

var results,
model = {
  "optimize": "volume",
  "opType": "min",
  "constraints":{
      "Trinatium": { "min": trit },
      "Pyerite"  : { "min": pyer },
      "Mexallon" : { "min": mex },
      "Isogen"   : { "min": iso },
      "Nocxium"  : { "min": nox },
      "Zydrine"  : { "min": zyd },
      "Megacyte" : { "min": mega },
      "Morphite" : { "min": morph },
  },
  "variables": calculatedOreOutputs
};

results = solver.Solve(model);

let veld = document.getElementById('veld');
let scor = document.getElementById('scor');
let pyro = document.getElementById('pyro');
let plagio = document.getElementById('plagio');
let omber = document.getElementById('omber');
let kernite = document.getElementById('kernite');
let jaspet = document.getElementById('jaspet');
let hemo = document.getElementById('hemo');
let spod = document.getElementById('spod');
let dark = document.getElementById('dark');
let gneiss = document.getElementById('gneiss');
let hedber = document.getElementById('hedber');
let crok = document.getElementById('crok');
let bist = document.getElementById('bist');
let ark = document.getElementById('ark');
let merc = document.getElementById('merc');
let output_area = document.getElementById('output-area');

output_area.value = JSON.stringify(results)
veld.value = Math.ceil(results["Veldspar"]) || 0;
scor.value = Math.ceil(results["Scordite"]) || 0;
pyro.value = Math.ceil(results["Pyroxeres"]) || 0;
plagio.value = Math.ceil(results["Plagioclase"]) || 0;
omber.value = Math.ceil(results["Omber"]) || 0;
kernite.value = Math.ceil(results["Kernite"]) || 0;
jaspet.value = Math.ceil(results["Jaspet"]) || 0;
hemo.value = Math.ceil(results["Hemorphite"]) || 0;
spod.value = Math.ceil(results["Spodumain"]) || 0;
dark.value = Math.ceil(results["Dark Ochre"]) || 0;
gneiss.value = Math.ceil(results["Gneiss"]) || 0;
hedber.value = Math.ceil(results["Hedbergite"]) || 0;
crok.value = Math.ceil(results["Crokite"]) || 0;
bist.value = Math.ceil(results["Bistot"]) || 0;
ark.value = Math.ceil(results["Arkonor"]) || 0;
merc.value = Math.ceil(results["Mercoxit"]) || 0;

}

let adjustOreOutputs = (common, uncommon, special, rare, precious) => {
    let customOres = {}
    
    Object.keys(ORES).forEach((key) => {
        let minerals = {
            "Trinatium": 0,
            "Pyerite":   0,
            "Mexallon":  0,
            "Isogen":    0,
            "Nocxium":   0,
            "Zydrine":   0,
            "Megacyte":  0,
            "Morphite":  0
        }
        if(ORES[key].rarity == "common"){
            Object.keys(minerals).forEach(mineralName => {
                minerals[mineralName] = ORES[key][mineralName] * (common/100)
            })
            customOres[key] = Object.assign({}, ORES, minerals)
        }
        if(ORES[key].rarity == "uncommon"){
            Object.keys(minerals).forEach(mineralName => {
                minerals[mineralName] = ORES[key][mineralName] * (uncommon/100)
            })
            customOres[key] = Object.assign({}, ORES, minerals)
        }
        if(ORES[key].rarity == "special"){
            Object.keys(minerals).forEach(mineralName => {
                minerals[mineralName] = ORES[key][mineralName] * (special/100)
            })
            customOres[key] = Object.assign({}, ORES, minerals)
        }
        if(ORES[key].rarity == "rare"){
            Object.keys(minerals).forEach(mineralName => {
                minerals[mineralName] = ORES[key][mineralName] * (rare/100)
            })
            customOres[key] = Object.assign({}, ORES, minerals)
        }
        if(ORES[key].rarity == "precious"){
            Object.keys(minerals).forEach(mineralName => {
                minerals[mineralName] = ORES[key][mineralName] * (precious/100)
            })
            customOres[key] = Object.assign({}, ORES, minerals)
        }
    })

    return customOres;
}
