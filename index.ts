import express from 'express';
import signale from 'signale';
import userReceivedRoutes from './src/user/infrastructure/UserReceivedRoutes';
import * as dotenv from 'dotenv';
import cors from 'cors'; 
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
 
// Configuración de CORS detallada
app.use(cors({
    origin: '*', // Ajusta esto adecuadamente en un entorno de producción
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true // Ten cuidado con esta opción si el origen es '*'
}));

app.use(express.json());
app.use('/user-received', userReceivedRoutes);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});
