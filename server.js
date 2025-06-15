import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 3000;
sequelize.authenticate().then(() => {
  console.log('DB connected');
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
