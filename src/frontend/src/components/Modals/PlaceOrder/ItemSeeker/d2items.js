// Internal imports
import {
    uniques,
    sets,
    runes,
    miscItems,
} from '../../../../app/structures/index';


/**
 * A function that tests a search query against an array of unique item objects,
 * returning a match if found.
 * @param {String} search The search query.
 */
 const d2UniqueData = (search) => {
    if (typeof search !== "string") return;
    let uniqueItem;
    let matchFound = false;

    // Loop through runes array and find the unique item name that matches the
    // search query
    for (let i in uniques) {
        if (uniques[i].name.toLowerCase() !== search.toLowerCase()) continue;
        uniqueItem = uniques[i];
        matchFound = true;
        break;
    }

    if (matchFound) return uniqueItem;
};

/**
 * A function that tests a search query against an array of set item objects,
 * returning a match if found.
 * @param {String} search The search query.
 */
 const d2SetData = (search) => {
    if (typeof search !== "string") return;
    let setItem;
    let matchFound = false;

    // Loop through runes array and find the rune name that matches the search
    // query
    for (let i in sets) {
        if (sets[i].name.toLowerCase() !== search.toLowerCase()) continue;
        setItem = sets[i];
        matchFound = true;
        break;
    }

    if (matchFound) return setItem;
};

/**
 * A function that tests a search query against an array of rune objects,
 * returning a match if found.
 * @param {String} search The search query.
 */
 const d2RuneData = (search) => {
    if (typeof search !== "string") return;
    let rune;
    let matchFound = false;

    // Loop through runes array and find the rune name that matches the search
    // query
    for (let r in runes) {
        if (runes[r].name.toLowerCase() !== search.toLowerCase()) continue;
        rune = runes[r];
        matchFound = true;
        break;
    }

    if (matchFound) return rune;
};

/**
 * A function that tests a search query against an array of misc item objects,
 * returning a match if found.
 * @param {String} search The search query.
 */
 const d2MiscItemData = (search) => {
    if (typeof search !== "string") return;
    let miscItem;
    let matchFound = false;

    // Loop through miscItems array and find the item name that matches the search
    // query
    for (let i in miscItems) {
        if (miscItems[i].name.toLowerCase() !== search.toLowerCase()) continue;
        miscItem = miscItems[i];
        matchFound = true;
        break;
    }

    if (matchFound) return miscItem;
};

/**
 * A function that accepts a search query as a string and tests it against
 * several different functions for a match, returning the first match.
 * @param {String} search The user's search query.
 */
const d2ItemData = (search) => {
    // An empty search comes in as an object, and
    // we only want string searches.
    if (typeof search !== "string") return;

    // Object of match results
    let match = {
        found: false,
        item: null,
    };

    
    // Test the search query for unique items
    const uniqueSearch = d2UniqueData(search);
    if (uniqueSearch) {
        match.found = true;
        match.item = uniqueSearch;
    }
    
    // Test the search query for set items
    const setSearch = d2SetData(search);
    if (setSearch) {
        match.found = true;
        match.item = setSearch;
    }

    // Test the search query for runes
    const runeSearch = d2RuneData(search);
    if (runeSearch) {
        match.found = true;
        match.item = runeSearch;
    }

    // Test the search query for misc items
    const miscSearch = d2MiscItemData(search);
    if (miscSearch) {
        match.found = true;
        match.item = miscSearch;
    }

    return match;
};

export default d2ItemData;