import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const GET: APIRoute = async ({request}) => {
    // const _obj: any = {}
    // new URL(request.url).searchParams.forEach((value, key) => {
    //     _obj[key] = value
    // });
    // const { t } = _obj;
    let lists: any[] = [];
    if (request.url.includes('t=se')) {
        const { rows } = await client.sql`SELECT url, title, icon, description, author, search_key FROM gpts_lists order by RANDOM() desc limit 30;`.catch(() => {
            return {
                rows: []
            };
        });
        lists = rows;
    } else if (request.url.includes('t=six')) {
        const { rows } = await client.sql`SELECT url, title, icon, description, author, search_key FROM gpts_lists WHERE weights > 0 order by RANDOM() desc limit 6;`.catch(() => {
            return {
                rows: []
            };
        });
        lists = rows;
    } else if (request.url.includes('t=hot')) {
        const { rows } = await client.sql`SELECT url, title, icon, description, author, search_key FROM gpts_lists WHERE weights > 100 order by weights desc limit 15;`.catch(() => {
            return {
                rows: []
            };
        });
        lists = rows;
    } else {
        const { rows } = await client.sql`SELECT url, title, icon, description, author, search_key FROM gpts_lists order by RANDOM() desc limit 51;`.catch(() => {
            return {
                rows: []
            };
        });
        lists = rows;

    }
    
    return new Response(
        JSON.stringify({
            code: 0,
            data: {
                lists
            },
        })
    );
};