// Deal Lantern — black-friday-deal-finder-01 entry (Node 22, standard library
// only): the site is this directory's app/ folder, plain static files a
// browser opens at app/index.html (ES modules, CSS, no build step), its deals
// held in its own files: nothing it runs, styles or shows loads over the
// network, and each deal links out to its store. The program hands it in: it
// copies app/ and screenshots/ from beside this file to /output and writes
// /output/dossier.json, the summary the judge reads (your screenshots, the
// first load's files and bytes, and your source), with the vendored make.fun
// library. Leave vendor/makefun-frontend.ts as it is: the scorer requires
// dossier.json to be byte for byte what its own copy writes.
//
// Serve it locally with a static server over app/, then open index.html.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
cpSync(join(here, 'app'), join(out, 'app'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });

writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, { text_max_bytes: 163840, screenshots: { max: 4, max_bytes: 262144 }, app_max_files: 993, app_max_bytes: 16777216 }),
);

// Verify the entry before reporting it: the dossier must exist and parse,
// and the site's entry point must be in the output.
import { readFileSync, readdirSync, statSync } from 'node:fs';
const dossier = JSON.parse(readFileSync(join(out, 'dossier.json'), 'utf8'));
if (!existsSync(join(out, 'app', 'index.html'))) throw new Error('missing /output/app/index.html');
const shotCount = readdirSync(join(out, 'screenshots')).length;
console.log('dossier ok: text', dossier.text?.length ?? 0, 'chars;',
  'app files', dossier.app?.files ?? '?', '· screenshots', shotCount,
  '· dossier bytes', statSync(join(out, 'dossier.json')).size);
