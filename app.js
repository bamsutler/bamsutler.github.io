// This is internal stuff. Scroll down to REPR_RATES
// (line 34 and on)
// -------------------------------------------------
const TRIT = 0
const PYER = 1
const MEXA = 2
const ISOG = 3
const NOCX = 4
const ZYDR = 5
const MEGA = 6
const MORP = 7
const MAX_MINERAL = MORP + 1

const VELD = 0
const SCOR = 1
const PYRO = 2
const PLAG = 3
const OMBE = 4
const KERN = 5
const JASP = 6
const HEMO = 7
const SPOD = 8
const DARK = 9
const GNEI = 10
const HEDB = 11
const CROK = 12
const BIST = 13
const ARKO = 14
const MERC = 15
const MAX_ORE = MERC + 1

// This table defines your reprocessing rates:
// How many mineral units you are getting from one unit of ore
// Update this with your own rates 
const BASE_REPR_RATES = {
    //     TRIT     PYER     MEXA     ISOG     NOCX     ZYDR    MEGA    MORP
    VELD: [ 1.99   , 0      , 0      , 0      , 0      , 0     , 0     , 0     ],
    SCOR: [ 0.7776 , 0.552  , 0      , 0      , 0      , 0     , 0     , 0     ],
    PYRO: [ 8.95   , 2.86   , 1.28   , 0      , 0.153  , 0     , 0     , 0     ],
    PLAG: [ 0.2448 , 0.312  , 0.4656 , 0      , 0      , 0     , 0     , 0     ],
    OMBE: [ 3.06   , 0.3876 , 0.000  , 0.2805 , 0      , 0     , 0     , 0     ],
    KERN: [ 1.36   , 0      , 2.45   , 0.2448 , 0      , 0     , 0     , 0     ],
    JASP: [ 0      , 0      , 9.59   , 0      , 0.19   , 0.22  , 0     , 0     ],
    HEMO: [ 28.05  , 0      , 0      , 0.816  , 0.0663 , 0.255 , 0     , 0     ],
    SPOD: [ 100.47 , 19.07  , 1.84   , 0.306  , 0      , 0     , 0     , 0     ],
    DARK: [ 4.90   , 0      , 0      , 0.2856 , 0.2193 , 0     , 0     , 0     ],
    GNEI: [ 0.00   , 4.49   , 4.69   , 0.9384 , 0      , 0     , 0     , 0     ],
    HEDB: [ 0      , 10.65  , 0      , 1.79   , 0.0351 , 0.0546, 0     , 0     ],
    CROK: [ 151.32 , 0      , 0      , 0      , 0.3666 , 0.3744, 0     , 0     ],
    BIST: [ 0      , 18.36  , 0      , 0      , 0      , 0.108 , 0.24  , 0     ],
    ARKO: [ 26.4   , 0      , 3      , 0      , 0      , 0     , 0.31  , 0     ],
    MERC: [ 0      , 0      , 0      , 0      , 0      , 0     , 0     , 0.18  ],
    }

// This is how many minerals we want. Fill in your values.
// Right now it holds values for Retriever.
TARGET = {
    TRIT: 3297180,
    PYER: 811446,
    MEXA: 278319,
    ISOG: 41884,
    NOCX: 13648,
    ZYDR: 4277,
    MEGA: 0,
    MORP: 0,
    }

// This is ore hold of your miner to cacl trips count
// Venture III, as you can see. You migt want to updade this
// If you are mining in something more excotic
ORE_HOLD = 9000

// Now press "Run" button at the top of page

// No user servicable parts below this line
// ----------------------------------------

ORE_VOLUMES = {
    VELD: 0.1,
    SCOR: 0.15,
    PYRO: 1.5,
    PLAG: 0.35,
    OMBE: 0.6,
    KERN: 1.2,
    JASP: 4.0,
    HEMO: 3.0,
    SPOD: 3.2,
    DARK: 1.6,
    GNEI: 2.0,
    HEDB: 3.0,
    CROK: 6.4,
    BIST: 6.4,
    ARKO: 6.4,
    MERC: 8.0,
    }

MINERAL_NAMES = {
    TRIT: "Trinatium",
    PYER: "Pyerite",
    MEXA: "Mexallon",
    ISOG: "Isogen",
    NOCX: "Nocxium",
    ZYDR: "Zydrine",
    MEGA: "Megacyte",
    MORP: "Morphite",
    }

ORE_NAMES = {
    VELD: "Veldspar",
    SCOR: "Scordite",
    PYRO: "Pyroxeres",
    PLAG: "Plagioclase",
    OMBE: "Omber",
    KERN: "Kernite",
    JASP: "Jaspet",
    HEMO: "Hemorphite",
    SPOD: "Spodumain",
    DARK: "Dark Ochre",
    GNEI: "Gneiss",
    HEDB: "Hedbergite",
    CROK: "Crokite",
    BIST: "Bistot",
    ARKO: "Arkonor",
    MERC: "Mercoxit",
    }

// We always optimize for ore volumes
obj = [ORE_VOLUMES[x] for x in range(MAX_ORE)]

// Bounds: we can't mine negative number of ores
bounds = [(0, scipy.inf ) for x in range(MAX_ORE)]

// Total minerals should be not less than in TARGET
// Scipy uses <= unequalily, so we must invert values
b_ub = [-TARGET[x] for x in range(MAX_MINERAL)]

#
A_ub =[ [  - REPR_RATES[o][m]  for o in range(MAX_ORE) ] for m in range(MAX_MINERAL)]

opt = linprog(c = obj, A_ub = A_ub, b_ub = b_ub, bounds = bounds,
              options = {"tol": 4e-10},  method = "revised simplex")

print("Total trips: ", opt.fun / ORE_HOLD)
print("Ores to mine (trips)")
for o in range(MAX_ORE):
    print("   %20s %f (%f)" % (ORE_NAMES[o], opt.x[o] * ORE_VOLUMES[o], opt.x[o] * ORE_VOLUMES[o] / ORE_HOLD))
print("Minerls yield per ore:")
for o in range(MAX_ORE):
    if opt.x[o] > 0.01:
        print("%10s" % ORE_NAMES[o])
        for m in range(MAX_MINERAL):
            if REPR_RATES[o][m] > 0.01:
                print("%20s %f" % (MINERAL_NAMES[m], opt.x[o] * REPR_RATES[o][m]))

print("Extra minerals (above needed):")
for m in range(MAX_MINERAL):
    print("   %20s  %f" % (MINERAL_NAMES[m], opt.slack[m]))
