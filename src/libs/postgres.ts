import { createPool } from '@vercel/postgres';

const connectDb = async () => {
    const client = createPool({
        connectionString: import.meta.env.POSTGRES_URL
    });
    await client.connect();
    return client;
};

export default await connectDb();
