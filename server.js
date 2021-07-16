require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')
const URL = "mongodb://localhost:27017/test";
// const trail = require('path-trail');

// PORT
const PORT = process.env.PORT || 9000;

mongoose.connect(URL,{
	useCreateIndex:true,	
	useNewUrlParser:true,
	useUnifiedTopology: true
});
const db = mongoose.connection;

db.once('open',() => console.log('Connected to MongoDB'));
db.on('error',err => console.log(err));

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(fileUpload({
	useTempFiles: true
}))

app.get('/test', (req, res) => {
	res.send("testing")
})

app.use(express.urlencoded( {extended:false}))
app.use(express.json())

app.use('/user', require('./api/routes/userRouter'))
app.use('/api', require('./api/routes/categoryRouter'))
app.use('/api', require('./api/routes/upload'))
app.use('/api', require('./api/routes/productRouter'))
app.use('/api', require('./api/routes/paymentRouter'))

//trail.map_routes(app,{filePath:false}) 


app.listen(PORT,()=>{
console.log(`Running on port ${PORT}`)
})
