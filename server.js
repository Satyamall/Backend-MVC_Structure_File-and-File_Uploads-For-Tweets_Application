


const express=require("express");
const app =express();
const cors= require('cors');
const connect = require('./app/config/db');
const userRouter = require('./app/routes/users.route');
const tweetRouter = require('./app/routes/tweets.route');

const PORT=3000;

app.set("view engine", "ejs")
app.use( express.static( "app/uploads" ) );

//cors
app.use(cors());
app.use(express.json())

// *routers for users and tweets
app.use("/users", userRouter);
app.use("/tweets",tweetRouter);

const start= async ()=>{
    await connect();
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`);
    })
}

module.exports=start;