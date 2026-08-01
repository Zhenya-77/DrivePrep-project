import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import { logger } from './middlewares/logger.js';
import connectMongoDB from './db/connectMongoDB.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { errors } from 'celebrate';
import categoryRoutes from './routes/categoryRoutes.js';
import rulesRoutes from './routes/ruleRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import profileRoutes from './routes/profileRoutes.js';
import userRoutes from './routes/userRoutes.js';
import questionRoutes from './routes/questinRoutes.js';
import answerRoutes from './routes/answerRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

app.use(profileRoutes);
app.use(authRoutes);
app.use(categoryRoutes);
app.use(rulesRoutes);
app.use(userRoutes);
app.use(questionRoutes);
app.use(answerRoutes);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
