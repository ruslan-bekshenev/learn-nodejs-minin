const os = require('os')


// Platform
console.log(os.platform())

// Архитектура => x64
console.log(os.arch())

// Информация о ядрах
console.log(os.cpus())

// Свободная память
console.log(os.freemem())

// Общая память на компе
console.log(os.totalmem())

// Корневая директория на компе
console.log(os.homedir())

// Сколько система работает
console.log(os.uptime())