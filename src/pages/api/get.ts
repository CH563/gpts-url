import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const GET: APIRoute = async ({request}) => {
    const _obj: any = {}
    new URL(request.url).searchParams.forEach((value, key) => {
        _obj[key] = value
    });
    const pageSize = 30;
    const { cate, keyword, page, not } = _obj;
    const p = +page || 1
    const offset = pageSize * (p - 1);
    const categoryId = +cate || 0;
    let lists: any[] = [];
    if (keyword) {
        const k = `%${keyword}%`;
        const { rows } = await client.sql`
        SELECT title, icon, description, author, search_key FROM gpts_lists
        WHERE title ilike ${k} OR description ilike ${k}
        ORDER BY (weights,id) DESC
        LIMIT ${pageSize} OFFSET ${offset};
        `.catch(() => {
            return {
                rows: []
            };
        });
        lists = rows;
    } else if (categoryId === -1) {
        const { rows } = await client.sql`
        SELECT title, icon, description, author, search_key FROM gpts_lists
        WHERE weights > 0
        ORDER BY weights DESC
        LIMIT ${pageSize} OFFSET ${offset};
        `.catch(() => {
            return {
                rows: []
            };
        });
        lists = rows;
    } else if (categoryId === -2) {
        const { rows } = await client.sql`
        SELECT title, icon, description, author, search_key FROM gpts_lists
        WHERE weights > 0 and search_key != ${not}
        ORDER BY RANDOM() DESC
        LIMIT 6;
        `.catch(() => {
            return {
                rows: []
            };
        });
        lists = rows;
    } else if (categoryId) {
        const { rows } = await client.sql`
        SELECT l.title, l.icon, l.description, l.author, l.search_key
        FROM gpts_lists l
        JOIN list_categories lc ON l.id = lc.list_id
        WHERE lc.category_id = ${categoryId}
        ORDER BY (weights,id) DESC
        LIMIT ${pageSize} OFFSET ${offset};
        `.catch(() => {
            return {
                rows: []
            };
        });
        lists = rows;
    } else {
        const { rows } = await client.sql`
        SELECT title, icon, description, author, search_key FROM gpts_lists
        ORDER BY (weights,id) DESC
        LIMIT ${pageSize} OFFSET ${offset};
        `.catch(() => {
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
                lists,
                page: p,
                page_size: pageSize
            },
        })
    );
};