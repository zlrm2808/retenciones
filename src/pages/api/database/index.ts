import 'dotenv/config';
import mysql from 'mysql2/promise';

export async function GET() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
  });

  const [rows] = await connection.execute('SELECT 1');
  await connection.end();

  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json' },
  });
}