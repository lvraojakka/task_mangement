import { Sequelize, DataTypes } from 'sequelize';
import { readdirSync } from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { URL } from 'url';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
  }
);

const db = {};

// Get the directory path of this file
const modelsDir = new URL('.', import.meta.url).pathname;

// Read all model files and import them
const files = readdirSync(modelsDir).filter(
  (file) => file !== 'index.js' && file.endsWith('.model.js')
);

for (const file of files) {
  const modulePath = path.join(modelsDir, file);
  const { default: defineModel } = await import(`file://${modulePath}`);
  const model = defineModel(sequelize, DataTypes);
  db[model.name] = model;
}

// Call associate if any
for (const modelName of Object.keys(db)) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}

// 🔄 Sync (Uncomment as needed)

// await sequelize.sync(); // basic
// await sequelize.sync({ force: true }); // dev mode
// console.log('Database synced');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
