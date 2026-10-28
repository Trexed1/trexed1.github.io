import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { getLocalWriteups, getLocalWriteupFile } from '../../../lib/local-writeups';

export function getStaticPaths() {
  return getLocalWriteups().flatMap((writeup) =>
    ['document.pdf', 'cover.png', ...writeup.pages.map((page) => page.file)].map((file) => ({
      params: { slug: writeup.slug, file },
    })),
  );
}

export const GET: APIRoute = ({ params }) => {
  const path = getLocalWriteupFile(params.slug, params.file);
  if (!path) return new Response(null, { status: 404 });
  return new Response(new Uint8Array(readFileSync(path)), {
    headers: {
      'Content-Type': params.file?.endsWith('.pdf') ? 'application/pdf' : 'image/png',
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
};
