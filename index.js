import express from 'express'
import path from 'path';

//middlewares import
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

//routers import
import globalRouter from "./routes/globalRoutes";
import apiRouter from "./routes/apiRoutes";
import userRouter from "./routes/userRoutes";


//server init
const app = express();
const router = express.Router();

//pug default is views folder
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));


//routers setting
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/api", apiRouter);





app.listen(4000);

export default app;
