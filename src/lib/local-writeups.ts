import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface LocalWriteup {
  slug: string;
  title: string;
  event: string;
  description: string;
  pages: { file: string; text: string }[];
}

const directory = resolve(process.cwd(), 'docs/content-drafts/ncl-materials');

export function getLocalWriteups(): LocalWriteup[] {
  if (!import.meta.env.DEV) return [];
  const manifest = resolve(directory, 'manifest.json');
  return existsSync(manifest) ? JSON.parse(readFileSync(manifest, 'utf8')) : [];
}

export function getLocalWriteupFile(slug: string | undefined, file: string | undefined) {
  if (!import.meta.env.DEV || !slug || !file) return null;
  const writeup = getLocalWriteups().find((item) => item.slug === slug);
  if (!writeup || !/^[a-z0-9-]+$/.test(writeup.slug)) return null;
  const allowed = ['document.pdf', 'cover.png', ...writeup.pages.map((page) => page.file)];
  if (!allowed.includes(file) || !/^[a-z0-9.-]+$/.test(file)) return null;
  return resolve(directory, writeup.slug, file);
}
