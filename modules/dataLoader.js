const fetch = require('node-fetch');

async function loadData(url) {
    let isLoading = true;
    let data = null;
    let error = null;

    try {
        const response = await fetch(url);
        data = await response.json();
    }
    catch (err) { error = err.message; }
    finally { isLoading = false; }
    return { data, isLoading, error };
}

module.exports = { loadData };