import type { APIRoute } from 'astro';
import client from '../../libs/postgres';
// import { toAddWorksData } from '../../example/addData';

export const POST: APIRoute = async ({ request }) => {
    // await toAddWorksData();
    return new Response(
        JSON.stringify({
            code: 0,
            data: {
                // len: data.length
            },
        })
    );
};
