import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const GET: APIRoute = async () => {
    let lists: any[] = [];
    const { rows } = await client.sql`SELECT id,categories_name FROM categories order by id;`.catch(() => {
        return {
            rows: []
        };
    });
    lists = rows;
    return new Response(
        JSON.stringify({
            code: 0,
            data: {
                lists
            },
        })
    );
};
