const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)
hbs.registerPartials(`${__dirname}/views/partials`)
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res, next)=> {
  res.render('home')
})

app.get('/about', (req, res, next) => {
  res.render('about')
})

app.get('/works', (req, res, next) => {
  res.render('works')
})

const port = 3000
app.listen(port, () => {
  console.log(`App is listening at port ${port}`)
})