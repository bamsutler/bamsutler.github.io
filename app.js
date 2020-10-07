var solver = solver,
  results,
  model = {
    "optimize": "volume",
    "opType": "min",
    "constraints": {
        "Trinatium": { "min": 44 },
        "Pyerite":   { "min": 44 },
        "Mexallon":  { "min": 44 },
        "Isogen":    { "min": 44 },
        "Nocxium":   { "min": 44 },
        "Zydrine":   { "min": 44 },
        "Megacyte":  { "min": 44 },
        "Morphite":  { "min": 44 },
    },
    "variables": {
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
    },
};

results = solver.Solve(model);
console.log(results);

// // This is ore hold of your miner to cacl trips count
// // Venture III, as you can see. You migt want to updade this
// // If you are mining in something more excotic
// ORE_HOLD = 9000


// // We always optimize for ore volumes
// obj = [ORE_VOLUMES[x] for x in range(MAX_ORE)]

// // Bounds: we can't mine negative number of ores
// bounds = [(0, scipy.inf ) for x in range(MAX_ORE)]

// // Total minerals should be not less than in TARGET
// // Scipy uses <= unequalily, so we must invert values
// b_ub = [-TARGET[x] for x in range(MAX_MINERAL)]

// #
// A_ub =[ [  - REPR_RATES[o][m]  for o in range(MAX_ORE) ] for m in range(MAX_MINERAL)]

// opt = linprog(c = obj, A_ub = A_ub, b_ub = b_ub, bounds = bounds,
//               options = {"tol": 4e-10},  method = "revised simplex")

// print("Total trips: ", opt.fun / ORE_HOLD)
// print("Ores to mine (trips)")
// for o in range(MAX_ORE):
//     print("   %20s %f (%f)" % (ORE_NAMES[o], opt.x[o] * ORE_VOLUMES[o], opt.x[o] * ORE_VOLUMES[o] / ORE_HOLD))
// print("Minerls yield per ore:")
// for o in range(MAX_ORE):
//     if opt.x[o] > 0.01:
//         print("%10s" % ORE_NAMES[o])
//         for m in range(MAX_MINERAL):
//             if REPR_RATES[o][m] > 0.01:
//                 print("%20s %f" % (MINERAL_NAMES[m], opt.x[o] * REPR_RATES[o][m]))

// print("Extra minerals (above needed):")
// for m in range(MAX_MINERAL):
//     print("   %20s  %f" % (MINERAL_NAMES[m], opt.slack[m]))
