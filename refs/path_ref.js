const path = require('path')

console.log(path.basename(__filename))
console.log(__dirname)
console.log(path.dirname(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename)) // возвращается объект (root, dir, base, ext, name)

console.log(path.join(__dirname, 'test', 'second.html')) // формирование пути

console.log(path.resolve(__dirname, './test', '/second.html' )) // возвращает корректный путь