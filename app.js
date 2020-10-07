const ORES =  {
    "Veldspar": {
        "volume": .1,
        "Trinatium": 413,
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
        "Trinatium": 160,
        "Pyerite":   113,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Pyroxeres":{
        "volume": 1.5,
        "Trinatium": 1753,
        "Pyerite":   560,
        "Mexallon":  250,
        "Isogen":    0,
        "Nocxium":   30,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Plagioclase":{
        "volume": .35,
        "Trinatium": 50,
        "Pyerite":   63,
        "Mexallon":  96,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Omber":{
        "volume": .6,
        "Trinatium": 600,
        "Pyerite":   73,
        "Mexallon":  0,
        "Isogen":    53,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Kernite":{
        "volume": 1.2,
        "Trinatium": 276,
        "Pyerite":   0,
        "Mexallon":  503,
        "Isogen":    50,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Jaspet":{
        "volume": 4,
        "Trinatium": 0,
        "Pyerite":   0,
        "Mexallon":  2460,
        "Isogen":    0,
        "Nocxium":   46,
        "Zydrine":   53,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Hemorphite":{
        "volume": 3,
        "Trinatium": 5500,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    160,
        "Nocxium":   10,
        "Zydrine":   50,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Spodumain":{
        "volume": 3.2,
        "Trinatium": 19700,
        "Pyerite":   3740,
        "Mexallon":  360,
        "Isogen":    60,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Dark Ochre":{
        "volume": 1.6,
        "Trinatium": 960,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    53,
        "Nocxium":   40,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Gneiss":{
        "volume": 2,
        "Trinatium": 0,
        "Pyerite":   880,
        "Mexallon":  917,
        "Isogen":    183,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Hedbergite":{
        "volume": 3,
        "Trinatium": 2726,
        "Pyerite":   0,
        "Mexallon":  460,
        "Isogen":    6,
        "Nocxium":   13,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Crokite":{
        "volume": 6.4,
        "Trinatium": 38880,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   93,
        "Zydrine":   93,
        "Megacyte":  0,
        "Morphite":  0,
    },
    "Bistot":{
        "volume": 6.4,
        "Trinatium": 0,
        "Pyerite":   6120,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   33,
        "Megacyte":  76,
        "Morphite":  0,
    },
    "Arkonor":{
        "volume": 6.4,
        "Trinatium": 8800,
        "Pyerite":   0,
        "Mexallon":  1000,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  103,
        "Morphite":  0,
    },
    "Mercoxit":{
        "volume": 8,
        "Trinatium": 0,
        "Pyerite":   0,
        "Mexallon":  0,
        "Isogen":    0,
        "Nocxium":   0,
        "Zydrine":   0,
        "Megacyte":  0,
        "Morphite":  60,
    },
};

function calculate(params) {
    let trit = document.getElementById('trit').nodeValue
    let pyer = document.getElementById('pyer').nodeValue
    let mex = document.getElementById('mex').nodeValue
    let iso = document.getElementById('iso').nodeValue
    let nox = document.getElementById('nox').nodeValue
    let zyd = document.getElementById('zyd').nodeValue
    let mega = document.getElementById('mega').nodeValue
    let morph = document.getElementById('morph').nodeValue

    trit = trit > 0 ? trit : 0
    pyer = pyer > 0 ? pyer : 0
    mex = mex > 0 ? mex : 0
    iso = iso > 0 ? iso : 0
    nox = nox > 0 ? nox : 0
    zyd = zyd > 0 ? zyd : 0
    mega = mega > 0 ? mega : 0
    morph = morph > 0 ? morph : 0

var solver = solver,
results,
model = {
  "optimize": "volume",
  "opType": "min",
  "constraints": {
      "Trinatium": { "min": trit },
      "Pyerite":   { "min": pyer },
      "Mexallon":  { "min": mex },
      "Isogen":    { "min": iso },
      "Nocxium":   { "min": nox },
      "Zydrine":   { "min": zyd },
      "Megacyte":  { "min": mega },
      "Morphite":  { "min": morph },
  },
  "variables": ORES
};

results = solver.Solve(model);
console.log(results);
}

