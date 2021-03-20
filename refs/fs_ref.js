const fs = require('fs')
const path = require('path')
// File system 
// Не рекомендуется вызывать синхронный метод так как блочит поток
// В node js всегда первый параметр это ошибка


// fs.mkdir(path.join(__dirname, 'notes'), (error) => {
//   if (error) {
//     throw error
//   }
//   console.log('Папка была создана')
// })

// Запись в файл, при повторном выполнении скрипта файл перезапишется
const currentPath = path.join(__dirname, 'notes', 'mynotes.txt')
// fs.writeFile(
//   currentPath,
//   'Hello, World!!!!',
//   (error) => {
//     if (error) {
//       throw error
//     }
//     // Добавляет инфу в файл 
//     fs.appendFile(
//       currentPath,
//       ' \nAppend file',
//       (error) => {
//         if (error) {
//           throw error
//         }
//         console.log('Файл был изменен')
//         fs.readFile(currentPath,
//         'utf-8',
//         (err, data) => {
//           if (err) {
//             throw err
//           }
//           // Buffer считывает инфу из поле data , toString приводит к строке
//           // console.log('data: ', Buffer.from(data).toString())
//           console.log(data)
//         })
//       }
//     )
//   }
// )

//Переименовка файла

fs.rename(
  currentPath,
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) {
      throw err
    }
    console.log('Файл переименован')
  }
)