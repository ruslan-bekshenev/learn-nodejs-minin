function consoleToJSON() {
  const c = {

  }

  for (let i = 2; i < process.argv.length; i++) {
    // argv - аргументы передаваемые в консоли
    const arg = process.argv[i].split('=')
    c[arg[0]] = arg[1] || false
  }

  return c
}


console.log(consoleToJSON())