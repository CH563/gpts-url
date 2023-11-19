import type { APIRoute } from 'astro';
// import client from '../../libs/postgres';
// import { toRun } from '../../example/categories';

export const POST: APIRoute = async ({ request }) => {
    // await toRun();
    return new Response(
        JSON.stringify({
            code: 0,
            data: {
                // len: data.length
            },
        })
    );
};
