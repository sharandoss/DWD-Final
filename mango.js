const mongoose = require("mongoose")
const mongoPath = 'mongodb+srv://sharanmohanadossbalaguru:gFCxdFwjT5i6Ogd7@cluster0.ai1es.mongodb.net/test-db?retryWrites=true&w=majority'

module.exports = () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

        })

        return mongoose
        
}