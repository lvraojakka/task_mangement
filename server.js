import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes 
app.use('/api', routes);

// Start server only if DB is connected
const port = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('PostgreSQL connected successfully.');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  });
