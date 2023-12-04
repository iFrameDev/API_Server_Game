import express from 'express';
import { DatabaseManager } from './src/database/database';
import userRouter from './src/account/user.route';

const app = express();
const dbmanager = new DatabaseManager();
const router = express.Router();

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(3000, () => {
    dbmanager.initializeDatabase();
    console.log('The application is listening on port 3000!');
})


export default router;