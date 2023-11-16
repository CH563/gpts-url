import type { APIRoute } from 'astro';
import client from '../../libs/postgres';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const keyword = body.keyword;
  let lists: any[] = [];
  if (keyword) {
    try {
      const k = `%${keyword}%`;
      const { rows } = await client.sql`select url, icon, title, description, author from gpts_lists WHERE title ilike ${k} or description ilike ${k} limit 6`;
      if (rows?.length) lists = rows;
    } catch (error) {
      // console.log(error);
    }
  } else {
    try {
      const { rows } = await client.sql`SELECT url, title, icon, description, author FROM gpts_lists order by RANDOM() desc limit 51;`;
      if (rows?.length) lists = rows;
    } catch (error) {
      // console.log(error);
    }
  }
  return new Response(JSON.stringify({
    code: 0,
    lists
  })
  )
};