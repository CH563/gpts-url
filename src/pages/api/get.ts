import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const GET: APIRoute = async () => {
    const { rows } = await client.sql`SELECT url, title, icon, description, author FROM gpts_lists order by RANDOM() desc limit 300;`.catch(() => {
        return {
            rows: []
        };
    });
    return new Response(
        JSON.stringify({
            code: 0,
            data: {
                lists: rows,
            },
        })
    );
};