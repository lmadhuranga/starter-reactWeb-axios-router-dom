const { default: mongoose } = require("mongoose");
// const { default: mongoose } = require("colors");

const connectDB = async () => {
    try {
        // console.log(`msg_ process.env.MONGO_URI`,process.env.MONGO_URI);
        const  conn =  await mongoose.connect("mongodb+srv://madhuranga:webkit123@cluster0.7mxgzjs.mongodb.net/blogsdb?retryWrites=true&w=majority")
        console.log(`msg_  COnnected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`msg_ error`,error);
        process.exit(1)
    }
}

module.exports = connectDB;