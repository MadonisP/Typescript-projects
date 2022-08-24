import mongoose from 'mongoose'
import config from 'config'

const connect = async () => {
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri);
        console.log('DB connected')
    } catch (error) {
        console.log('DB connection is failed')
        process.exit(1);
    }
}

export default connect