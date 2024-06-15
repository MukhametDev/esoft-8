const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, './../db.json');
let db = require(dbPath);

/**
 * Writes the database content to a file in JSON format with specified formatting.
 *
 * @param {string} dbPath - The path to the database file.
 * @return {void}
 */
function saveDb() {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
}

/**
 * Validates if a given domain is in a valid format.
 *
 * @param {string} domain - The domain to validate.
 * @return {boolean} Returns true if the domain is valid, false otherwise.
 */
function isValidDomain(domain) {
    const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;

    if (domain.length > 253) {
        return false;
    }

    return domainPattern.test(domain);
}

module.exports = {
    saveDb,
    isValidDomain
}