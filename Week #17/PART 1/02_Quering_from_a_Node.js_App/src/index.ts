import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function getUser(email: string) {
  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]);
      return result.rows[0];
    } else {
      console.log('No user found with the given email.');
      return null;
    }
  } catch (err) {
    console.error('Error fetching user:', err);
    throw err;
  }
}


getUser('harsh@example.com').catch(console.error);
