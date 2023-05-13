import mongoose from "mongoose";
const Connection = async () => {
    const URL = `mongodb+srv://kaqsa829:aqsajunaid@cluster0.hvhezfh.mongodb.net/`
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('database connected succesfully')
    } catch (error) {
        console.log('error from connection', error.message)
    }
}
export default Connection