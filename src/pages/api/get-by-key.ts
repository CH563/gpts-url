import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const GET: APIRoute = async ({request}) => {
    const _obj: any = {}
    new URL(request.url).searchParams.forEach((value, key) => {
        _obj[key] = value
    });
    const { key } = _obj;
    const { rows } = await client.sql`SELECT url, title, icon, description, author, content, twitter FROM gpts_lists WHERE search_key = ${key} limit 1;`.catch(() => {
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