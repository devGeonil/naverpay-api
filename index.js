import express from 'express'
import path from 'path';

import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const app = express();

//app.use(express.static(__dirname + '/'));
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));



const homeController = (req, res) => {
  const request_params = req.query;
  res.render("index", {name:"geonil"});
}

app.get('/', homeController);

app.listen(4000);
