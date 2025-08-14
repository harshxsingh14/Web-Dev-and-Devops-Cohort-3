import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client("URL");

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try {
        await pgClient.connect();

        await pgClient.query(`
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);

        await pgClient.query(`
            CREATE TABLE IF NOT EXISTS addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        `);

        const insertQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const insertResponse = await pgClient.query(insertQuery, [username, email, password]);
        const userId = insertResponse.rows[0].id;

        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        const addressResponse = await pgClient.query(addressQuery, [city, country, street, pincode, userId]);
        
        res.json({
            message: "You have signed up successfully",
        });

    } catch (error) {
        console.log(error);  
        res.json({
            message: "Error while signing up",
        });
    }
});

app.listen(3000);
