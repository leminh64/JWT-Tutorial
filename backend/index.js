const express = require('express')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth');

dotenv.config();


mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Database is connected")).catch((err) => console.log(err))

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/v1/auth", authRoute);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('Server is running');
});

