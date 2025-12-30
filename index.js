require('dotenv').config();
console.log('|===============================================================|')
console.log('| Вывод данных из файла .env                                    |');
console.log(`| Имя Фамилия: ${process.env.FIRST_NAME} ${process.env.LAST_NAME}`)
console.log('| Группа:', process.env.GROUP);
console.log('| Номер в списке:', process.env.LIST_NUMBER);
console.log('| Режим:', process.env.MODE);
console.log('|===============================================================|')