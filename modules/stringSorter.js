function sortStringsIgnoringSpaces(arr) {
    return arr.map(s => s.replace(/\s/g, '')).sort();
}
module.exports = { sortStringsIgnoringSpaces };