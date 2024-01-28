import express from 'express';
import signale from 'signale';
import userRoutes from '../ApiHexagonal/src/user/infrastructure/UserRoutes';
import ClothesRouter from '../ApiHexagonal/src/clothes/infrastructure/ClothesRoutes';

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/user', userRoutes);
app.use('/clothes', ClothesRouter);
app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});