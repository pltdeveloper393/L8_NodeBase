const fs = require('fs');
const path = require('path');

function writeToFileSync(filePath, data) {
    fs.writeFileSync(filePath, data);
}

async function writeToFileAsync(filePath, data) {
    await fs.promises.writeFile(filePath, data);
}

function readFromFileSync(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

async function readFromFileAsync(filePath) {
    return await fs.promises.readFile(filePath, 'utf-8');
}

function updateFileSync(filePath, newData) {
    fs.writeFileSync(filePath, newData);
}

async function updateFileAsync(filePath, newData) {
    await fs.promises.writeFile(filePath, newData);
}

function clearFileSync(filePath) {
    fs.writeFileSync(filePath, '');
}

async function clearFileAsync(filePath) {
    await fs.promises.writeFile(filePath, '');
}

function cleanFileSync(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/\d/g, '').toLowerCase();
    fs.writeFileSync(filePath, content);
}

function copyFileSync(src, dest) {
    fs.copyFileSync(src, dest);
}

function createDirSync(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function removeDirSync(dirPath) {
    if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true });
    }
}

function getAllFilesSync(rootDir) {
    const result = [];
    function scan(dir) {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) { scan(fullPath); }
            else if (!item.startsWith('.') && !dir.includes('node_modules')) {
                result.push(fullPath);
            }
        });
    }
    scan(rootDir);
    return result;
}

function cleanProjectSync(rootDir) {
    const items = fs.readdirSync(rootDir);
    items.forEach(item => {
        if (item === 'node_modules' || item.startsWith('.')) return;
        const fullPath = path.join(rootDir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            removeDirSync(fullPath);
        }
        else {
            fs.unlinkSync(fullPath);
        }
    });
}

module.exports = {
    writeToFileSync, writeToFileAsync,
    readFromFileSync, readFromFileAsync,
    updateFileSync, updateFileAsync,
    clearFileSync, clearFileAsync,
    cleanFileSync,
    copyFileSync,
    createDirSync,
    removeDirSync,
    getAllFilesSync,
    cleanProjectSync
};