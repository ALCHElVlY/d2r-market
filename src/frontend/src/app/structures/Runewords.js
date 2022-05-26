const pathToRuneWordImages = "../assets/images/d2items/runewords";

// Object Array of all the runewords in the game
const runewords = [
  {
    name: "Ancient's Pledge",
    allowed_items: ["shields"],
    rune_order: "Ral Ort Tal",
    image: `${pathToRuneWordImages}/Ancient's_Pledge.webp`,
    properties: [],
  },
  {
    name: "Black",
    allowed_items: ["clubs", "hammers", "maces"],
    rune_order: "Thul Io Nef",
    image: `${pathToRuneWordImages}/Black.webp`,
    properties: [],
  },
  {
    name: "Fury",
    allowed_items: ["any weapon"],
    rune_order: "Jah Gul Eth",
    image: `${pathToRuneWordImages}/Fury.webp`,
    properties: [],
  },
  {
    name: "Holy Thunder",
    allowed_items: ["sceptors"],
    rune_order: "Eth Ral Ort Tal",
    image: `${pathToRuneWordImages}/Holy_Thunder.webp`,
    properties: [],
  },
  {
    name: "Honor",
    allowed_items: ["any weapon"],
    rune_order: "Amn El Ith Tir Sol",
    image: `${pathToRuneWordImages}/Honor.webp`,
    properties: [],
  },
  {
    name: "King's Grace",
    allowed_items: ["swords", "sceptors"],
    rune_order: "Amn Ral Thul",
    image: `${pathToRuneWordImages}/King's_Grace.webp`,
    properties: [],
  },
  {
    name: "Leaf",
    allowed_items: ["staves"],
    rune_order: "Tir Ral",
    image: `${pathToRuneWordImages}/Leaf.webp`,
    properties: [],
  },
  {
    name: "Lionheart",
    allowed_items: ["chest armor"],
    rune_order: "Hel Lum Fal",
    image: `${pathToRuneWordImages}/Lionheart.webp`,
    properties: [],
  },
  {
    name: "Lore",
    allowed_items: ["helms"],
    rune_order: "Ort Sol",
    image: `${pathToRuneWordImages}/Lore.webp`,
    properties: [],
  },
  {
    name: "Malice",
    allowed_items: ["any weapon"],
    rune_order: "Ith El Eth",
    image: `${pathToRuneWordImages}/Malice.webp`,
    properties: [],
  },
  {
    name: "Melody",
    allowed_items: ["any weapon"],
    rune_order: "Shael Ko Nef",
    image: `${pathToRuneWordImages}/Melody.webp`,
    properties: [],
  },
  {
    name: "Memory",
    allowed_items: ["staves"],
    rune_order: "Lum Io Sol Eth",
    image: `${pathToRuneWordImages}/Memory.webp`,
    properties: [],
  },
  {
    name: "Nadir",
    allowed_items: ["helms"],
    rune_order: "Nef Tir",
    image: `${pathToRuneWordImages}/Nadir.webp`,
    properties: [],
  },
  {
    name: "Radiance",
    allowed_items: ["helms"],
    rune_order: "Nef Sol Ith",
    image: `${pathToRuneWordImages}/Radiance.webp`,
    properties: [],
  },
  {
    name: "Rhyme",
    allowed_items: ["shields"],
    rune_order: "Shael Eth",
    image: `${pathToRuneWordImages}/Radiance.webp`,
    properties: [],
  },
  {
    name: "Silence",
    allowed_items: ["any weapon"],
    rune_order: "Dol Eld Hel Ist Tir Vex",
    image: `${pathToRuneWordImages}/Silence.webp`,
    properties: [],
  },
  {
    name: "Smoke",
    allowed_items: ["chest armor"],
    rune_order: "Nef Lum",
    image: `${pathToRuneWordImages}/Smoke.webp`,
    properties: [],
  },
  {
    name: "Stealth",
    allowed_items: ["chest armor"],
    rune_order: "Tal Eth",
    image: `${pathToRuneWordImages}/Stealth.webp`,
    properties: [],
  },
  {
    name: "Steel",
    allowed_items: ["swords", "axes", "maces"],
    rune_order: "Tir El",
    image: `${pathToRuneWordImages}/Steel.webp`,
    properties: [],
  },
  {
    name: "Strength",
    allowed_items: ["any weapon"],
    rune_order: "Amn Tir",
    image: `${pathToRuneWordImages}/Strength.webp`,
    properties: [],
  },
  {
    name: "Venom",
    allowed_items: ["any weapon"],
    rune_order: "Tal Dol Mal",
    image: `${pathToRuneWordImages}/Venom.webp`,
    properties: [],
  },
  {
    name: "Wealth",
    allowed_items: ["chest armor"],
    rune_order: "Lem Ko Tir",
    image: `${pathToRuneWordImages}/Wealth.webp`,
    properties: [],
  },
  {
    name: "White",
    allowed_items: ["wands"],
    rune_order: "Dol Io",
    image: `${pathToRuneWordImages}/White.webp`,
    properties: [],
  },
  {
    name: "Zephyr",
    allowed_items: ["any weapon"],
    rune_order: "Ort Eth",
    image: `${pathToRuneWordImages}/Zephyr.webp`,
    properties: [],
  },
  {
    name: "Beast",
    allowed_items: ["axes", "sceptors", "hammers"],
    rune_order: "Ber Tir Um Mal Lum",
    image: `${pathToRuneWordImages}/Beast.webp`,
    properties: [],
  },
  {
    name: "Bramble",
    allowed_items: ["chest armor"],
    rune_order: "Ral Ohm Sur Eth",
    image: `${pathToRuneWordImages}/Bramble.webp`,
    properties: [],
  },
  {
    name: "Breath of The Dying",
    allowed_items: ["any weapon"],
    rune_order: "Vex Hel El Eld Zod Eth",
    image: `${pathToRuneWordImages}/Breath_of_The_Dying.webp`,
    properties: [],
  },
  {
    name: "Call to Arms",
    allowed_items: ["any weapon"],
    rune_order: "Amn Ral Mal Ist Ohm",
    image: `${pathToRuneWordImages}/Call_to_Arms.webp`,
    properties: [],
  },
  {
    name: "Chains of Honor",
    allowed_items: ["chest armor"],
    rune_order: "Dol Um Ber Ist",
    image: `${pathToRuneWordImages}/Chains_of_Honor.webp`,
    properties: [],
  },
  {
    name: "Chaos",
    allowed_items: ["claws"],
    rune_order: "Fal Ohm Um",
    image: `${pathToRuneWordImages}/Chaos.webp`,
    properties: [],
  },
  {
    name: "Crescent Moon (runeword)",
    allowed_items: ["axes", "swords", "polearms"],
    rune_order: "Shael Um Tir",
    image: `${pathToRuneWordImages}/Crescent_Moon.webp`,
    properties: [],
  },
  {
    name: "Delirium",
    allowed_items: ["helms"],
    rune_order: "Lem Ist Io",
    image: `${pathToRuneWordImages}/Delirium.webp`,
    properties: [],
  },
  {
    name: "Doom",
    allowed_items: ["axes", "polearms", "hammers"],
    rune_order: "Hel Ohm Um Lo Cham",
    image: `${pathToRuneWordImages}/Doom.webp`,
    properties: [],
  },
  {
    name: "Duress",
    allowed_items: ["chest armor"],
    rune_order: "Shael Um Thul",
    image: `${pathToRuneWordImages}/Duress.webp`,
    properties: [],
  },
  {
    name: "Enigma",
    allowed_items: ["chest armor"],
    rune_order: "Jah Ith Ber",
    image: `${pathToRuneWordImages}/Enigma.webp`,
    properties: [],
  },
  {
    name: "Eternity",
    allowed_items: ["any weapon"],
    rune_order: "Amn Ber Ist Sol Sur",
    image: `${pathToRuneWordImages}/Eternity.webp`,
    properties: [],
  },
  {
    name: "Exile",
    allowed_items: ["paladin shields"],
    rune_order: "Vex Ohm Ist Dol",
    image: `${pathToRuneWordImages}/Exile.webp`,
    properties: [],
  },
  {
    name: "Famine",
    allowed_items: ["axes", "hammers"],
    rune_order: "Fal Ohm Ort Jah",
    image: `${pathToRuneWordImages}/Famine.webp`,
    properties: [],
  },
  {
    name: "Gloom",
    allowed_items: ["chest armor"],
    rune_order: "Fal Um Pul",
    image: `${pathToRuneWordImages}/Gloom.webp`,
    properties: [],
  },
  {
    name: "Hand of Justice",
    allowed_items: ["any weapon"],
    rune_order: "Sur Cham Amn Lo",
    image: `${pathToRuneWordImages}/Hand_of_Justice.webp`,
    properties: [],
  },
  {
    name: "Heart of The Oak",
    allowed_items: ["staves", "maces(flails)"],
    rune_order: "Ko Vex Pul Thul",
    image: `${pathToRuneWordImages}/Heart_of_The_Oak.webp`,
    properties: [],
  },
  {
    name: "Kingslayer",
    allowed_items: ["swords", "axes"],
    rune_order: "Mal Um Gul Fal",
    image: `${pathToRuneWordImages}/Kingslayer.webp`,
    properties: [],
  },
  {
    name: "Passion",
    allowed_items: ["any weapon"],
    rune_order: "Dol Ort Eld Lem",
    image: `${pathToRuneWordImages}/Passion.webp`,
    properties: [],
  },
  {
    name: "Prudence",
    allowed_items: ["chest armor"],
    rune_order: "Mal Tir",
    image: `${pathToRuneWordImages}/Prudence.webp`,
    properties: [],
  },
  {
    name: "Sanctuary",
    allowed_items: ["shields"],
    rune_order: "Ko Ko Mal",
    image: `${pathToRuneWordImages}/Sanctuary.webp`,
    properties: [],
  },
  {
    name: "Splendor",
    allowed_items: ["shields"],
    rune_order: "Eth Lum",
    image: `${pathToRuneWordImages}/Splendor.webp`,
    properties: [],
  },
  {
    name: "Stone",
    allowed_items: ["chest armor"],
    rune_order: "Shael Um Pul Lum",
    image: `${pathToRuneWordImages}/Stone.webp`,
    properties: [],
  },
  {
    name: "Wind",
    allowed_items: ["any weapon"],
    rune_order: "Sur El",
    image: `${pathToRuneWordImages}/Wind.webp`,
    properties: [],
  },
  {
    name: "Brand",
    allowed_items: ["bows"],
    rune_order: "Jah Lo Mal Gul",
    image: `${pathToRuneWordImages}/Brand.webp`,
    properties: [],
  },
  {
    name: "Death",
    allowed_items: ["swords", "axes"],
    rune_order: "Hel El Vex Ort Gul",
    image: `${pathToRuneWordImages}/Death.webp`,
    properties: [],
  },
  {
    name: "Destruction",
    allowed_items: ["polearms", "swords"],
    rune_order: "Vex Lo Ber Jah Ko",
    image: `${pathToRuneWordImages}/Destruction.webp`,
    properties: [],
  },
  {
    name: "Dragon",
    allowed_items: ["helms", "shields"],
    rune_order: "Sur Lo Sol",
    image: `${pathToRuneWordImages}/Dragon.webp`,
    properties: [],
  },
  {
    name: "Dream",
    allowed_items: ["helms", "shields"],
    rune_order: "Io Jah Pul",
    image: `${pathToRuneWordImages}/Dream.webp`,
    properties: [],
  },
  {
    name: "Edge",
    allowed_items: ["bows"],
    rune_order: "Tir Tal Amn",
    image: `${pathToRuneWordImages}/Edge.webp`,
    properties: [],
  },
  {
    name: "Faith",
    allowed_items: ["bows"],
    rune_order: "Ohm Jah Lem Eld",
    image: `${pathToRuneWordImages}/Faith.webp`,
    properties: [],
  },
  {
    name: "Fortitude",
    allowed_items: ["any weapon", "chest armor"],
    rune_order: "El Sol Dol Lo",
    image: `${pathToRuneWordImages}/Fortitude.webp`,
    properties: [],
  },
  {
    name: "Grief",
    allowed_items: ["swords", "axes"],
    rune_order: "Eth Tir Lo Mal Ral",
    image: `${pathToRuneWordImages}/Grief.webp`,
    properties: [],
  },
  {
    name: "Harmony",
    allowed_items: ["bows"],
    rune_order: "Tir Ith Sol Ko",
    image: `${pathToRuneWordImages}/Harmony.webp`,
    properties: [],
  },
  {
    name: "Ice",
    allowed_items: ["bows"],
    rune_order: "Amn Shael Jah Lo",
    image: `${pathToRuneWordImages}/Ice.webp`,
    properties: [],
  },
  {
    name: "Infinity",
    allowed_items: ["polearms", "spears"],
    rune_order: "Ber Mal Ber Ist",
    image: `${pathToRuneWordImages}/Infinity.webp`,
    properties: [],
  },
  {
    name: "Insight",
    allowed_items: ["polearms", "staves"],
    rune_order: "Ral Tir Tal Sol",
    image: `${pathToRuneWordImages}/Insight.webp`,
    properties: [],
  },
  {
    name: "Last Wish",
    allowed_items: ["swords", "hammers", "axes"],
    rune_order: "Jah Mal Jah Sur Jah Ber",
    image: `${pathToRuneWordImages}/Last_Wish.webp`,
    properties: [],
  },
  {
    name: "Lawbringer",
    allowed_items: ["swords", "hammers", "sceptors"],
    rune_order: "Amn Lem Ko",
    image: `${pathToRuneWordImages}/Lawbringer.webp`,
    properties: [],
  },
  {
    name: "Oath",
    allowed_items: ["swords", "axes", "maces"],
    rune_order: "Shael Pul Mal Lem",
    image: `${pathToRuneWordImages}/Oath.webp`,
    properties: [],
  },
  {
    name: "Obedience",
    allowed_items: ["polearms", "spears"],
    rune_order: "Hel Ko Thul Eth Fal",
    image: `${pathToRuneWordImages}/Obedience.webp`,
    properties: [],
  },
  {
    name: "Phoenix",
    allowed_items: ["any weapon", "shields"],
    rune_order: "Vex Vex Lo Jah",
    image: `${pathToRuneWordImages}/Phoenix.webp`,
    properties: [],
  },
  {
    name: "Pride",
    allowed_items: ["polearms", "spears"],
    rune_order: "Cham Sur Io Lo",
    image: `${pathToRuneWordImages}/Pride.webp`,
    properties: [],
  },
  {
    name: "Rift",
    allowed_items: ["polearms", "sceptors"],
    rune_order: "Hel Ko Lem Gul",
    image: `${pathToRuneWordImages}/Rift.webp`,
    properties: [],
  },
  {
    name: "Spirit",
    allowed_items: ["swords", "shields"],
    rune_order: "Tal Thul Ort Amn",
    image: `${pathToRuneWordImages}/Spirit.webp`,
    properties: [],
  },
  {
    name: "Voice of Reason",
    allowed_items: ["swords", "maces"],
    rune_order: "Lem Ko El Eld",
    image: `${pathToRuneWordImages}/Voice_of_Reason.webp`,
    properties: [],
  },
  {
    name: "Wrath",
    allowed_items: ["bows"],
    rune_order: "Pul Lum Ber Mal",
    image: `${pathToRuneWordImages}/Wrath.webp`,
    properties: [],
  },
  {
    name: "Bone",
    allowed_items: ["chest armor"],
    rune_order: "Sol Um Um",
    image: `${pathToRuneWordImages}/Bone.webp`,
    properties: [],
  },
  {
    name: "Enlightenment",
    allowed_items: ["chest armor"],
    rune_order: "Pul Ral Sol",
    image: `${pathToRuneWordImages}/Enlightenment.webp`,
    properties: [],
  },
  {
    name: "Myth",
    allowed_items: ["chest armor"],
    rune_order: "Hel Amn Nef",
    image: `${pathToRuneWordImages}/Myth.webp`,
    properties: [],
  },
  {
    name: "Peace",
    allowed_items: ["chest armor"],
    rune_order: "Shael Thul Amn",
    image: `${pathToRuneWordImages}/Peace.webp`,
    properties: [],
  },
  {
    name: "Principle",
    allowed_items: ["chest armor"],
    rune_order: "Ral Gul Eld",
    image: `${pathToRuneWordImages}/Principle.webp`,
    properties: [],
  },
  {
    name: "Rain",
    allowed_items: ["chest armor"],
    rune_order: "Ort Mal Ith",
    image: `${pathToRuneWordImages}/Rain.webp`,
    properties: [],
  },
  {
    name: "Treachery",
    allowed_items: ["chest armor"],
    rune_order: "Shael Thul Lem",
    image: `${pathToRuneWordImages}/Treachery.webp`,
    properties: [],
  },
  {
    name: "Unbending Will",
    allowed_items: ["swords"],
    rune_order: "Fal Io Ith Eld El Hel",
    image: `${pathToRuneWordImages}/Unbending_Will.webp`,
    properties: [],
  },
  {
    name: "Mist",
    allowed_items: ["bows"],
    rune_order: "Cham Shael Gul Thul Ith",
    image: `${pathToRuneWordImages}/Mist.webp`,
    properties: [],
  },
  {
    name: "Wisdom",
    allowed_items: ["helms"],
    rune_order: "Pul Ith Eld",
    image: `${pathToRuneWordImages}/Wisdom.webp`,
    properties: [],
  },
  {
    name: "Pattern",
    allowed_items: ["claws"],
    rune_order: "Tal Ort Thul",
    image: `${pathToRuneWordImages}/Pattern.webp`,
    properties: [],
  },
  {
    name: "Plague",
    allowed_items: ["swords", "claws", "daggers"],
    rune_order: "Cham Shael Um",
    image: `${pathToRuneWordImages}/Plague.webp`,
    properties: [],
  },
  {
    name: "Obession",
    allowed_items: ["staves"],
    rune_order: "Zod Ist Lem Lum Io Nef",
    image: `${pathToRuneWordImages}/Obession.webp`,
    properties: [],
  },
  {
    name: "Flickering Flame",
    allowed_items: ["helms"],
    rune_order: "Nef Pul Vex",
    image: `${pathToRuneWordImages}/Flickering_Flame.webp`,
    properties: [],
  },
];

export default runewords;
