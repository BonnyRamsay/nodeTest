const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000


app.get('/', (request, response) => {
  response.render('home', {
      name: 'Bonny'
    })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
