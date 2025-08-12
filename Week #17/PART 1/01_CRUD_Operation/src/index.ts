import { Client } from "pg";

const pgClient = new Client("postgresql://database%201_owner:aBE0Nlv3WnYC@ep-round-sun-a5ojsiow.us-east-2.aws.neon.tech/database%201?sslmode=require");

async function main() {
    await pgClient.connect();

    await pgClient.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL, 
            email VARCHAR(255) UNIQUE NOT NULL, 
            password VARCHAR(255) NOT NULL, 
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    
    await pgClient.query(`
        INSERT INTO users (username, email, password)
        VALUES ('Harsh', 'harsh@gmail.com', '123456789')
    `);

    await pgClient.query(`
        INSERT INTO users (username, email, password)
        VALUES ('Rahul', 'rahul@gmail.com', '987654321')
    `);
    
    await pgClient.query(`
        UPDATE users SET password = '123456789'
        WHERE id = '2'; 
    `);

    await pgClient.query(`
        DELETE FROM users
        WHERE id = 1;
    `);

    const response = await pgClient.query(`
        SELECT * FROM users;
    `);
    
    console.log(response.rows);
}

main();
