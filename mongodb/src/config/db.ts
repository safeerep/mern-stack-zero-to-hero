import mongoose from "mongoose";

export default () => {
    try {
        const MONGO_URI: string = process.env.MONGO_URI || '';
        mongoose.connect(MONGO_URI)
        console.log(`successfully connected with db`);
    } catch (error) {
        console.log(`something went wrong ${error}`);
        process.exit(1)
    }
}
