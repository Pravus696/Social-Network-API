import mongoose from 'mongoose';

mongoose.connect(pocess.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

export default db;