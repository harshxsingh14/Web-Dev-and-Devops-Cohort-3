import { Client } from 'pg';

const client = new Client("postgresql://database%201_owner:aBE0Nlv3WnYC@ep-round-sun-a5ojsiow.us-east-2.aws.neon.tech/database%201?sslmode=require");

async function initializeDatabase() {
  try {
    await client.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS SQL_String (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Table initialized successfully.');
  } catch (err) {
    console.error('Error during table initialization:', err);
  }
}

async function insertData(username: string, email: string, password: string) {
  try {
    const insertQuery = "INSERT INTO SQL_String (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res);
  } catch (err) {
    console.error('Error during the insertion:', err);
  }
}

initializeDatabase()
  .then(() => insertData('John', 'john@example.com', 'Mainahibtaunga'))
  .catch(console.error)
  .finally(() => client.end());
