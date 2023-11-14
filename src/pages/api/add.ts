import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const POST: APIRoute = async ({ request }) => {
    // for (const item of data) {
    //     const { visit_url, avatar_url, name, description, author_name } = item;
    //     const { rows } = await client.sql`SELECT id, title FROM gpts_lists WHERE url = ${visit_url};`;
    //     console.log('rows', rows);
    //     if (rows?.length > 0) continue;
    //     const searchKey = new URL(visit_url).pathname.replace(/\/g\/g-\w+-/, '');
    //     const res = await client.sql`INSERT INTO gpts_lists (url, icon, title, description, author, search_key) VALUES (${visit_url}, ${avatar_url || ''}, ${name}, ${description}, ${author_name || ''}, ${searchKey});`;
    //     console.log('res', res);
    // }
    // console.log('res', res);
    // const { rows } = await client.sql`SELECT COUNT(*) FROM gpts_lists;`;
    return new Response(
        JSON.stringify({
            code: 0,
            data: {},
        })
    );
};
