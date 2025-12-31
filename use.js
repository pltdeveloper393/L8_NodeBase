const { loadData } = require('./modules/dataLoader');
const { sortStringsIgnoringSpaces } = require('./modules/stringSorter');
const { createDirSync, writeToFileSync } = require('./modules/fsModule');
const pathCatalog = './users';


async function main() {
    const { data: users } = await loadData('https://jsonplaceholder.typicode.com/users');
    if (!users) return;

    const names = users.map(u => u.name);
    const sortedNames = sortStringsIgnoringSpaces(names);

    createDirSync(pathCatalog);
    writeToFileSync('./users/names.txt', sortedNames.join('\n'));
    const emails = users.map(u => u.email).join('\n');
    writeToFileSync('./users/emails.txt', emails);
    console.log(`Каталог данных "users" создан по пути ${pathCatalog} .`);
}

main();