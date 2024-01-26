import express from 'express';
import signale from 'signale';
import UserRouter from '../ApiHexagonal/src/user/interfaces/controllers/UserController';
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/user', UserRouter);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});