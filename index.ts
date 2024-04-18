import express from 'express';
import signale from 'signale';
import userReceivedRoutes from './src/user/infrastructure/UserReceivedRoutes';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use('/user-received', userReceivedRoutes);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});
