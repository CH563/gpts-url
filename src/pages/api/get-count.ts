import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const GET: APIRoute = async ({request}) => {
    const _obj: any = {}
    new URL(request.url).searchParams.forEach((value, key) => {
        _obj[key] = value
    });
    const { cate, keyword } = _obj;
    let count = 0;
    const categoryId = +cate || 0;
    if (keyword) {
        const k = `%${keyword}%`;
        const { rows } = await client.sql`SELECT COUNT(*) FROM gpts_lists WHERE title ilike ${k} or description ilike ${k};`.catch(() => {
            return {
                rows: [{ count: 0 }]
            };
        });
        count = rows[0]?.count;
    } else if (categoryId === -1) {
        const { rows } = await client.sql`
        SELECT COUNT(*) FROM gpts_lists
        WHERE weights > 0;
        `.catch(() => {
            return {
                rows: [{ count: 0 }]
            };
        });
        count = rows[0]?.count;
    } else if (categoryId) {
        const { rows } = await client.sql`
        SELECT COUNT(*)
        FROM gpts_lists l
        JOIN list_categories lc ON l.id = lc.list_id
        WHERE lc.category_id = ${categoryId}
        `.catch(() => {
            return {
                rows: []
            };
        });
        count = rows[0]?.count;
    } else {
        const { rows } = await client.sql`SELECT COUNT(*) FROM gpts_lists;`.catch(() => {
            return {
                rows: [{ count: 0 }]
            };
        });
        count = rows[0]?.count;
    }
    return new Response(
        JSON.stringify({
            code: 0,
            data: {
                count
            },
        })
    );
};