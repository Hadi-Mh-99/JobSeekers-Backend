const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/LINKEDED', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
//mongodb+srv://fyp:.%2Fjobseekers123%2F.@fypcluster.53h65.mongodb.net/LINKED?retryWrites=true&w=majority

//mongodb://127.0.0.1:27017/LINKEDED