import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const GET: APIRoute = async () => {
    const { rows } = await client.sql`SELECT COUNT(*) FROM gpts_lists;`.catch(() => {
        return {
            rows: [{ count: 0 }]
        };
    });
    return new Response(
        JSON.stringify({
            code: 0,
            data: {
                count: rows[0]?.count
            },
        })
    );
};