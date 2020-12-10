const mongoose = require('mongoose');

//database connection
const url = 'mongo "mongodb+srv://cluster0.yk27k.mongodb.net/<accessories>" --vriuser vriuser';
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true,
useFindAndModify: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('Database conected');
}).catch(err => {
    console.log("failes to connect");
});
