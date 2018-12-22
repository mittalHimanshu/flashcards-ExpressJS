const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const mainRoutes = require('./routes/index')
const cardRoutes = require('./routes/cards')

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public'));
app.use(cookieParser());
app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.listen(3000);