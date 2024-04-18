import { Router } from "express";
import { UserReceivedController } from "./controllers/UserReceivedController";

const userReceivedRoutes = Router();

const userReceivedController = new UserReceivedController();

userReceivedRoutes.post('/process-message', async (req, res) => userReceivedController.processMessage(req, res));

export default userReceivedRoutes;
