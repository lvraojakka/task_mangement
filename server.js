import db from './models/index.js';












try {
  // Just testing the connection
  await db.sequelize.authenticate();
  console.log('Connected to PostgreSQL successfully.');

  // Optionally sync here instead
  // await db.sequelize.sync();
} catch (err) {
  console.error('Unable to connect to the database:', err);
}
