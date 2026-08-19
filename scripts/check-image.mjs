import { statSync, readFileSync } from 'fs';

const path = 'C:/Users/teanc/Cleanwavewindows.com/public/hero-me.png';
const stat = statSync(path);
console.log('File size:', stat.size, 'bytes');

// Check PNG header signature
const buf = readFileSync(path);
const sig = [...buf.slice(0,8)].map(b => b.toString(16).padStart(2,'0')).join(' ');
console.log('PNG signature:', sig);
console.log('Valid PNG:', sig === '89 50 4e 47 0d 0a 1a 0a');
