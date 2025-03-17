import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
console.log(process.env.MONGODB_URI);




const PORT = process.env.PORT || 4000;

const app = express();


// View Engine
app.set('views', "./views");
app.set("view engine", "pug") // will be stored here



// Middlewares
app.use(express.static("./public")); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(helmet()); // for hide and secure 



// Routes 
app.get('/', (req, res) => {
    res.render("index");
})


app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));