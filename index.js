// const obj = require('./user')

// console.log('Hello', __dirname)
// console.log('Hello', __filename)
// console.log('user: ', obj)

// obj.sayHello()

// Создаем сервак =)
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  res.write('<h1>Hello from NodeJS</h1>')
  res.write('<h2>Hello from NodeJS</h2>')
  res.write('<h3>Hello from NodeJS</h3>')
  // конец ответа
  res.end(`
    <div style="background: red; width: 200px; height: 200px">
      <h1>Test</h1>
    </div>
  `)
})

server.listen(3000, () => {
  console.log('Server is runnig...')
})
