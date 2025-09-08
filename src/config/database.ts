import { Client } from "pg";

const connectionString =
  process.env.DATABASE_URL || "your-default-connection-string";

export async function connectDB() {
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }

  return client;
}
