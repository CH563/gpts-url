import type { APIRoute } from 'astro';
import data from '../../static/data.json';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const keyword = body.keyword;
  let lists: any[] = [];
  if (keyword) {
    lists = data.filter(e => e.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) || e.desc.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
  }
  return new Response(JSON.stringify({
    code: 0,
    lists
  })
  )
};