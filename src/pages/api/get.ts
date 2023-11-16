import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const GET: APIRoute = async ({request}) => {
    // const _obj: any = {}
    // new URL(request.url).searchParams.forEach((value, key) => {
    //     _obj[key] = value
    // });
    // const { t } = _obj;
    let num = 51;
    if (request.url.includes('t=se')) num = 150;
    const { rows } = await client.sql`SELECT url, title, icon, description, author FROM gpts_lists order by RANDOM() desc limit ${num};`.catch(() => {
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