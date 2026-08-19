import { statSync } from 'fs';
for (const f of ['public/hero-me.jpg', 'public/hero-me.png', 'public/teancum.jpg']) {
  try {
    const s = statSync('C:/Users/teanc/Cleanwavewindows.com/' + f);
    console.log(f, s.size, 'bytes');
  } catch { console.log(f, 'MISSING'); }
}
