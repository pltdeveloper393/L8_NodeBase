const os = require('os');

function getOSInfo() {
    return {
        platform: os.platform(),
        freeMem: os.freemem(),
        totalMem: os.totalmem(),
        homedir: os.homedir(),
        hostname: os.hostname(),
        networkInterfaces: os.networkInterfaces(),
    };
}

function isMemoryMoreThan4GB() {
    const freeMemGB = os.freemem() / 1024 / 1024 / 1024;
    return freeMemGB > 4;
}

function getOSInfoIfAllowed() {
    if (process.env.MODE === 'admin') { console.log(getOSInfo()); }
    else { console.log('Доступ не предоставлен. Требуется разрешение admin.'); }
}

module.exports = { getOSInfo, isMemoryMoreThan4GB, getOSInfoIfAllowed };