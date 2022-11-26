const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const exphbs  = require('express-handlebars');
const port = 3000
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));

//Midleware
app.use(express.urlencoded());

app.use(express.json());

//HTTP logger
//app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs.engine({
  defaultLayout: 'main', 
  extname: '.hbs'}
));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})